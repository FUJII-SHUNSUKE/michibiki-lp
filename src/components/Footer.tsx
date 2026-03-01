export default function Footer() {
  return (
    <footer className="bg-white text-slate-700 py-10 px-4 border-t border-slate-200">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-bold text-slate-900 text-sm mb-2">Michibiki（みちびき）</p>
        <p className="text-xs mb-6">AI検索時代の多店舗集客を、一元化する。</p>

        <div className="flex flex-wrap justify-center gap-4 text-xs mb-8">
          <a href="#" className="hover:text-slate-900 transition-colors">プライバシーポリシー</a>
          <span>|</span>
          <a href="#" className="hover:text-slate-900 transition-colors">特定商取引法に基づく表記</a>
          <span>|</span>
          <a href="#" className="hover:text-slate-900 transition-colors">お問い合わせ</a>
        </div>

        <div className="text-xs space-y-1 mb-6">
          <p>株式会社TUKURO（TUKURO, inc）</p>
          <p>代表取締役　藤井俊祐</p>
          <p>〒141-0022 東京都品川区東五反田２丁目５-２-６階</p>
          <p>Email：michibiki@tukurokikai.com</p>
        </div>

        <p className="text-xs">© 2025 株式会社TUKURO All Rights Reserved.</p>
      </div>
    </footer>
  )
}
