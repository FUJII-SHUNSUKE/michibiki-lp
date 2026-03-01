import { useEffect, useState } from 'react'

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        background: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
      }}
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="MICHIBIKI" style={{ width: '28px', height: 'auto' }} />
          <p className="text-sm font-medium text-center sm:text-left" style={{ color: '#1A2E4A' }}>
            AI集客ウェビナー 無料開催｜毎週木曜 16:00〜
            <span className="ml-2 font-bold" style={{ color: '#E8640A' }}>残りわずか</span>
          </p>
        </div>
        <a
          href="#form"
          className="text-white text-sm font-bold rounded-full transition-all duration-200 hover:scale-105 whitespace-nowrap"
          style={{
            padding: '0.5rem 1.4rem',
            background: 'linear-gradient(135deg, #E8640A 0%, #c8490a 100%)',
            boxShadow: '0 4px 12px rgba(232,100,10,0.30)',
          }}
        >
          参加無料で申し込む
        </a>
      </div>
    </div>
  )
}
