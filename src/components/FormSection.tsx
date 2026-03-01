import { useState } from 'react'

const FORM_ID = '1FAIpQLSfPanO5v-mu_7g4RU6LnyCz8NFDIngQ45d7b8oK_HPCpkTakQ'
const FORM_ACTION = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`

export default function FormSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    stores: '',
    preferredDate: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const iframe = document.createElement('iframe')
    iframe.name = 'hidden_iframe'
    iframe.style.display = 'none'
    document.body.appendChild(iframe)

    const form = document.createElement('form')
    form.method = 'POST'
    form.action = FORM_ACTION
    form.target = 'hidden_iframe'

    const fields: Record<string, string> = {
      'entry.3544110': formData.name,
      'entry.1671345421': formData.company,
      'entry.350660107': formData.email,
      'entry.95693829': formData.stores,
      'entry.624884973': formData.preferredDate,
    }

    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = name
      input.value = value
      form.appendChild(input)
    })

    document.body.appendChild(form)
    form.submit()

    setTimeout(() => {
      document.body.removeChild(form)
      document.body.removeChild(iframe)
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  if (submitted) {
    return (
      <section id="form" style={{ padding: '5rem 1rem', background: '#fffaf5' }}>
        <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: '#eef6ee',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M5 13l4 4L19 7" stroke="#4a9a5a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2
            className="font-black mb-4"
            style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', color: '#0D1B2A' }}
          >
            申し込みありがとうございます！
          </h2>
          <p className="text-sm leading-loose mb-2" style={{ color: '#5a6a7a' }}>
            ご登録を受け付けました。
          </p>
          <p className="text-sm leading-loose mb-10" style={{ color: '#5a6a7a' }}>
            ウェビナー前日までに参加URLをメールでお送りします。<br />
            しばらくお待ちください。
          </p>
          <button
            onClick={() => {
              setSubmitted(false)
              setFormData({ name: '', company: '', email: '', stores: '', preferredDate: '' })
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 font-bold rounded-full transition-colors duration-200"
            style={{
              background: '#0D1B2A',
              color: '#ffffff',
              padding: '0.75rem 2rem',
              fontSize: '0.875rem',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            トップに戻る
          </button>
        </div>
      </section>
    )
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    border: '1px solid #d8dde4',
    borderRadius: '10px',
    padding: '0.75rem 1rem',
    fontSize: '0.875rem',
    outline: 'none',
    color: '#0D1B2A',
    background: '#ffffff',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#3a4a5a',
    marginBottom: '0.4rem',
  }

  return (
    <section id="form" style={{ padding: '5rem 1rem', background: '#ffffff' }}>
      <div style={{ maxWidth: '480px', margin: '0 auto' }}>
        <p
          className="text-center font-bold tracking-widest uppercase mb-4"
          style={{ fontSize: '0.7rem', color: '#8090a8', letterSpacing: '0.2em' }}
        >
          Apply
        </p>
        <h2
          className="font-black text-center mb-3"
          style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#0D1B2A' }}
        >
          ウェビナーに申し込む
        </h2>
        <p className="text-center text-sm mb-10" style={{ color: '#8090a8' }}>
          参加費無料・所要30秒
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {/* お名前 */}
          <div>
            <label style={labelStyle}>
              お名前 <span style={{ color: '#d04040' }}>*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="山田 太郎"
              style={inputStyle}
            />
          </div>

          {/* 会社名 */}
          <div>
            <label style={labelStyle}>
              会社名 <span style={{ color: '#d04040' }}>*</span>
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              placeholder="株式会社○○"
              style={inputStyle}
            />
          </div>

          {/* メールアドレス */}
          <div>
            <label style={labelStyle}>
              メールアドレス <span style={{ color: '#d04040' }}>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="taro@example.com"
              style={inputStyle}
            />
          </div>

          {/* 店舗数 */}
          <div>
            <label style={labelStyle}>
              店舗数 <span style={{ color: '#d04040' }}>*</span>
            </label>
            <select
              name="stores"
              value={formData.stores}
              onChange={handleChange}
              required
              style={inputStyle}
            >
              <option value="">選択してください</option>
              <option>5〜10店舗</option>
              <option>11〜30店舗</option>
              <option>31〜50店舗</option>
              <option>51〜100店舗</option>
              <option>101店舗以上</option>
            </select>
          </div>

          {/* 参加希望日 */}
          <div>
            <label style={labelStyle}>
              参加希望日 <span style={{ color: '#d04040' }}>*</span>
            </label>
            <select
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
              style={inputStyle}
            >
              <option value="">選択してください</option>
              <option>3月5日（木）16:00〜17:00</option>
              <option>3月12日（木）16:00〜17:00</option>
              <option>3月19日（木）16:00〜17:00</option>
              <option>3月26日（木）16:00〜17:00</option>
              <option>4月2日（木）16:00〜17:00</option>
              <option>4月9日（木）16:00〜17:00</option>
              <option>4月16日（木）16:00〜17:00</option>
              <option>4月23日（木）16:00〜17:00</option>
              <option>4月30日（木）16:00〜17:00</option>
            </select>
          </div>

          {/* 送信ボタン */}
          <button
            type="submit"
            disabled={loading}
            className="w-full font-black text-white rounded-full transition-all duration-200 hover:scale-[1.02]"
            style={{
              padding: '1rem',
              fontSize: '1rem',
              background: loading
                ? 'rgba(232,100,10,0.6)'
                : 'linear-gradient(135deg, #E8640A 0%, #c8490a 100%)',
              boxShadow: loading ? 'none' : '0 8px 32px rgba(232,100,10,0.35)',
              marginTop: '0.4rem',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? '送信中...' : '60分でAI集客戦略を手に入れる（参加無料）'}
          </button>

          <p className="text-center text-xs" style={{ color: '#a0a8b0' }}>
            送信することで
            <a href="#" style={{ color: '#6070a0', textDecoration: 'underline' }}>プライバシーポリシー</a>
            に同意したものとみなします。
          </p>
        </form>
      </div>
    </section>
  )
}
