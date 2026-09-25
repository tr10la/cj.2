import { mono } from "@/app/fonts";

const calendarScript = `
(function () {
  var root = document.getElementById("stay-cal");
  if (!root || root.dataset.ready) return;
  root.dataset.ready = "1";
  var MONTHS = ["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"];
  var LABELS = ["Dl","Dt","Dc","Dj","Dv","Ds","Dg"];
  var cursor = new Date();
  cursor = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
  var checkin = "";
  var checkout = "";
  function iso(d) {
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function today() {
    var n = new Date();
    return iso(new Date(n.getFullYear(), n.getMonth(), n.getDate()));
  }
  function rate(night) {
    var p = night.split("-");
    var month = Number(p[1]);
    var day = Number(p[2]);
    if (month === 12 && day >= 6 && day <= 8) return 350;
    if (month === 6 && day === 23) return 360;
    if (month === 8) return 390;
    if (month === 7) return 360;
    if (month === 4 || month === 5 || month === 6 || month === 9) return 340;
    return 330;
  }
  function quote() {
    var nights = document.getElementById("stay-nights");
    var total = document.getElementById("stay-total");
    if (!nights || !total) return;
    if (!checkin || !checkout || checkout <= checkin) {
      nights.textContent = "Indica les dates";
      total.textContent = "—";
      return;
    }
    var start = new Date(checkin + "T12:00:00");
    var end = new Date(checkout + "T12:00:00");
    var count = 0;
    var sum = 0;
    for (var d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
      count += 1;
      sum += rate(iso(d));
    }
    nights.textContent = count + (count === 1 ? " nit" : " nits");
    total.textContent = sum.toLocaleString("ca-ES") + " €";
  }
  function syncInputs() {
    var a = document.getElementById("checkin");
    var b = document.getElementById("checkout");
    if (a) a.value = checkin;
    if (b) b.value = checkout;
    quote();
  }
  function paint() {
    var year = cursor.getFullYear();
    var month = cursor.getMonth();
    var blanks = (new Date(year, month, 1).getDay() + 6) % 7;
    var days = new Date(year, month + 1, 0).getDate();
    var now = today();
    var html = '<div class="grid grid-cols-7 gap-1">';
    LABELS.forEach(function (label) {
      html += '<div class="${mono.className} py-1.5 text-center text-[9px] tracking-[0.14em] text-[#6b6258] uppercase">' + label + "</div>";
    });
    for (var i = 0; i < blanks; i++) html += "<div></div>";
    for (var day = 1; day <= days; day++) {
      var value = iso(new Date(year, month, day));
      var past = value < now;
      var selected = value === checkin || value === checkout;
      var between = checkin && checkout && value > checkin && value < checkout;
      var cls = past
        ? "cursor-not-allowed bg-transparent text-[rgba(28,24,21,0.28)]"
        : selected
          ? "cursor-pointer bg-[#1c1815] text-[#faf2e4]"
          : between
            ? "cursor-pointer bg-[#efe1c8] text-[#1c1815]"
            : "cursor-pointer bg-[#faf2e4] text-[#1c1815] hover:bg-[#efe1c8]";
      html += '<button type="button" data-day="' + value + '"' + (past ? " disabled" : "") + ' class="flex aspect-square items-center justify-center text-sm ' + cls + '">' + day + "</button>";
    }
    html += "</div>";
    var grid = root.querySelector("[data-grid]");
    var title = root.querySelector("[data-title]");
    if (title) title.textContent = MONTHS[month] + " " + year;
    if (grid) grid.innerHTML = html;
  }
  root.addEventListener("click", function (event) {
    var target = event.target;
    var nav = target && target.closest ? target.closest("[data-nav]") : null;
    if (nav) {
      var step = nav.getAttribute("data-nav") === "prev" ? -1 : 1;
      cursor = new Date(cursor.getFullYear(), cursor.getMonth() + step, 1);
      paint();
      return;
    }
    var day = target && target.closest ? target.closest("[data-day]") : null;
    if (!day || day.disabled) return;
    var value = day.getAttribute("data-day");
    if (!checkin || checkout || value <= checkin) {
      checkin = value;
      checkout = "";
    } else {
      checkout = value;
    }
    syncInputs();
    paint();
  });
  document.addEventListener("change", function (event) {
    var input = event.target;
    if (!input || !input.id) return;
    if (input.id === "checkin") checkin = input.value;
    if (input.id === "checkout") checkout = input.value;
    if (input.id === "checkin" || input.id === "checkout") {
      quote();
      paint();
    }
  });
  paint();
})();
`;

export function StayCalendar() {
  return (
    <div id="stay-cal" className="mt-6 border-t border-dashed border-[#d9c9ac] pt-[22px]">
      <h4 className={`${mono.className} m-0 mb-3.5 flex items-center justify-between text-[10px] font-normal tracking-[0.16em] text-[#6b6258] uppercase`}>
        <span data-title="">Calendari</span>
        <span className="flex gap-1">
          <button type="button" data-nav="prev" aria-label="Mes anterior" className="h-[26px] w-[26px] cursor-pointer border border-[#d9c9ac] bg-transparent p-0 text-xs text-[#3a342d] hover:border-[#1c1815] hover:bg-[#1c1815] hover:text-[#faf2e4]">
            ‹
          </button>
          <button type="button" data-nav="next" aria-label="Mes següent" className="h-[26px] w-[26px] cursor-pointer border border-[#d9c9ac] bg-transparent p-0 text-xs text-[#3a342d] hover:border-[#1c1815] hover:bg-[#1c1815] hover:text-[#faf2e4]">
            ›
          </button>
        </span>
      </h4>
      <div data-grid="" />
      <div className={`${mono.className} mt-3.5 flex flex-wrap gap-[18px] text-[9px] tracking-[0.14em] text-[#6b6258] uppercase`}>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 bg-[#faf2e4]" />
          <span data-i18n="cal.free">Lliure</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 bg-[#efe1c8]" />
          <span data-i18n="cal.booked">Reservat</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 bg-[#1c1815]" />
          <span data-i18n="cal.yours">La vostra estada</span>
        </span>
      </div>
      <script dangerouslySetInnerHTML={{ __html: calendarScript }} />
    </div>
  );
}
