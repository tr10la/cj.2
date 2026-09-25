import { mono } from "@/app/fonts";
import { fieldInput, fieldLabel, formPanel, submitBtn } from "@/components/form-styles";

export function ReserveForm() {
  return (
    <form className={formPanel} data-inquiry="" noValidate>
      <div className="mb-[18px] grid grid-cols-1 gap-[18px] min-[601px]:grid-cols-2">
        <label className={`${fieldLabel} block`} data-i18n="form.checkin">
          Entrada
          <input className={fieldInput} type="date" name="checkin" id="checkin" required />
        </label>
        <label className={`${fieldLabel} block`} data-i18n="form.checkout">
          Sortida
          <input className={fieldInput} type="date" name="checkout" id="checkout" required />
        </label>
      </div>
      <div className="mb-[18px] grid grid-cols-1 gap-[18px] min-[601px]:grid-cols-3">
        <label className={`${fieldLabel} block`} data-i18n="form.adults">
          Adults
          <input className={fieldInput} type="number" name="guests" min={1} max={11} defaultValue={4} />
        </label>
        <label className={`${fieldLabel} block`} data-i18n="form.kids">
          Nens
          <input className={fieldInput} type="number" name="kids" min={0} max={6} defaultValue={0} />
        </label>
        <label className={`${fieldLabel} block`} data-i18n="form.babies">
          Bebès
          <input className={fieldInput} type="number" name="babies" min={0} max={3} defaultValue={0} />
        </label>
      </div>
      <div className="mb-[18px]">
        <label className={`${fieldLabel} block`} data-i18n="form.nom">
          Nom
          <input className={fieldInput} type="text" name="name" placeholder="El vostre nom complet" />
        </label>
      </div>
      <div className="mb-[18px] grid grid-cols-1 gap-[18px] min-[601px]:grid-cols-2">
        <label className={`${fieldLabel} block`} data-i18n="form.correu">
          Correu
          <input className={fieldInput} type="email" name="email" placeholder="hola@..." />
        </label>
        <label className={`${fieldLabel} block`} data-i18n="form.tel">
          Telèfon
          <input className={fieldInput} type="tel" name="phone" placeholder="+34 ..." />
        </label>
      </div>
      <div className="mb-[18px]">
        <label className={`${fieldLabel} block`} data-i18n="form.donn">
          D&apos;on veniu? (Opcional)
          <input className={fieldInput} type="text" name="from" placeholder="Barcelona, Toulouse, Mallorca..." />
        </label>
      </div>
      <div className="mb-[18px]">
        <label className={`${fieldLabel} block`} data-i18n="form.msg">
          Voleu dir-nos res més?
          <textarea className={`${fieldInput} min-h-[72px] resize-y`} name="msg" rows={4} />
        </label>
      </div>
      <div className="mt-4 flex items-baseline justify-between border-t border-dashed border-[#d9c9ac] pt-4">
        <span id="stay-nights" className={`${mono.className} text-[10px] tracking-[0.14em] text-[#6b6258] uppercase`}>
          Indica les dates
        </span>
        <span id="stay-total" className="text-2xl font-light">
          —
        </span>
      </div>
      <button className={submitBtn} type="submit" data-i18n="form.submit">
        Envia la consulta
      </button>
      <div hidden data-thanks="" className="mt-3.5 border-l-2 border-[#7a7a4f] bg-[#efe1c8] px-4 py-3.5 text-sm text-[#3a342d]" data-i18n="form.ok">
        Gràcies. Us escrivim avui mateix.
      </div>
    </form>
  );
}
