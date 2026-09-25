import { fieldInput, fieldLabel, formPanel, submitBtn } from "@/components/form-styles";

export function ContactForm() {
  return (
    <form className={formPanel} data-inquiry="" noValidate>
      <div className="mb-[18px]">
        <label className={`${fieldLabel} mb-1.5 block`} data-i18n="form.nom">
          Nom
          <input className={fieldInput} type="text" name="name" placeholder="El vostre nom" required />
        </label>
      </div>
      <div className="mb-[18px] grid grid-cols-1 gap-[18px] min-[601px]:grid-cols-2">
        <label className={`${fieldLabel} block`} data-i18n="form.correu">
          Correu
          <input className={fieldInput} type="email" name="email" placeholder="hola@..." required />
        </label>
        <label className={`${fieldLabel} block`} data-i18n="form.tel">
          Telèfon
          <input className={fieldInput} type="tel" name="phone" placeholder="+34 ..." />
        </label>
      </div>
      <div className="mb-[18px]">
        <label className={`${fieldLabel} mb-1.5 block`} data-i18n="ctp.form.q">
          Què voleu preguntar-nos?
          <textarea
            className={`${fieldInput} min-h-[72px] resize-y`}
            name="msg"
            rows={6}
            placeholder="Quan voleu venir, quantes persones, si veniu amb nens, amb gos, o el que sigui."
          />
        </label>
      </div>
      <button className={submitBtn} type="submit" data-i18n="ctp.submit">
        Envia el missatge
      </button>
      <p className={`${fieldLabel} mt-3.5 leading-[1.6]`} data-i18n="ctp.fine">
        No us afegirem a cap llista. No us escriurem si no ens escriviu primer.
      </p>
      <div hidden data-thanks="" className="mt-3.5 border-l-2 border-[#7a7a4f] bg-[#efe1c8] px-4 py-3.5 text-sm text-[#3a342d]" data-i18n="form.ok">
        Gràcies. Us escrivim avui mateix.
      </div>
    </form>
  );
}
