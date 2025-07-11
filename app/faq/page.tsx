'use client';

import Link from 'next/link';

export default function FAQPage() {
  const faqs = [
    {
      id: 1,
      question: "本当に「自分に合ったイベント」が見つかるんですか？",
      answer: "はい。LinkMeでは、登録時のプロフィールや性格タイプ、興味関心などをもとに、あなたに合ったイベントを自動で提案します。過去の参加履歴やフィードバックも反映され、使えば使うほど精度が高まります。"
    },
    {
      id: 2,
      question: "どんなジャンルのイベントがありますか？",
      answer: "読書会、朝活、ボードゲーム会、ランチ交流会、ものづくりワークショップなど、堅苦しくないライトなイベントを中心に取り扱っています。"
    },
    {
      id: 3,
      question: "友達がいない状態で参加しても大丈夫ですか？",
      answer: "もちろん大丈夫です。ひとり参加OKのイベントも多数あり、はじめての人同士が出会いやすいよう設計されています。むしろ一人参加の方が多いイベントもあります。"
    },
    {
      id: 4,
      question: "変な勧誘やネットワークビジネスに遭遇しないか不安です。",
      answer: "ご安心ください。LinkMeではネットワークビジネス・宗教勧誘などは禁止としています。違反報告があった場合は厳重に対処し、再発防止に努めています。"
    },
    {
      id: 5,
      question: "イベントに行ってみて合わなかったらどうすれば？",
      answer: "イベント参加後にフィードバックを記入できる機能があるので、「自分には合わなかった」と感じた点を記録しておくことで、次回のマッチングに反映されます。"
    },
    {
      id: 6,
      question: "料金はかかりますか？",
      answer: "アプリ自体の利用は無料です。一部のイベント参加には料金が必要な場合がありますが、事前に明示されているため安心してご利用いただけます。"
    },
    {
      id: 7,
      question: "プライバシーや個人情報は守られますか？",
      answer: "はい。ユーザー情報は厳重に管理されており、第三者に勝手に共有されることはありません。ニックネーム登録も可能なので、本名を出す必要もありません。"
    },
    {
      id: 8,
      question: "なぜ無料で利用できるのですか？アプリが潰れてしまわないか心配です。。笑",
      answer: "ご安心ください。LinkMeは、イベントを有料で開催する主催者の方から、収益の20％を手数料としていただいております。そのため、イベントに参加する方、また無料でイベントを開催する主催者の方には、完全無料でご利用いただけます。ユーザーの方にとって安心・安全な出会いの場を継続的に提供するための、持続可能なモデルを構築しています。"
    },
    {
      id: 9,
      question: "イベントの主催をしたい場合はどうしたらいいですか？",
      answer: "とても簡単です！LinkMeの「主催者ページ」から、必要事項を入力するだけでイベントを作成できます。イベントは審査制となっており、内容を確認した上で掲載されます。初心者の方でもサポートしますので、お気軽にご応募ください。"
    },
    {
      id: 10,
      question: "どうやってイベントの安全性（勧誘がないなど）を高めているのでしょうか？",
      answer: "以下二つの対策で安全性を保っています。フィードバック機能：参加者からのリアルな評価を集め、問題があれば主催者に警告・非表示対応を行います。ガイドライン違反時の対処：ネットワークビジネス・宗教・過度な営業行為などは禁止しており、違反があった場合は厳重に対応します。"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-pink-400 font-pacifico hover:text-pink-500 transition-colors">
              LinkMe
            </Link>
            <div className="flex items-center space-x-3">
              <Link href="/hosts" className="text-xs sm:text-sm text-gray-600 hover:text-pink-400 transition-colors">
                主催者向け
              </Link>
              <div className="text-sm text-gray-600 bg-pink-100 px-3 py-1 rounded-full">FAQ</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-3 sm:px-6 py-6 sm:py-12">
        {/* Hero Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-3xl shadow-lg p-3 sm:p-8 mb-4 sm:mb-8 border border-pink-100">
          <div className="text-center mb-6 sm:mb-8">
            <div className="text-xs sm:text-sm text-pink-400 font-medium mb-3 sm:mb-4 bg-pink-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full inline-block">
              ❓ FAQ ❓
            </div>
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-6 leading-tight sm:leading-relaxed px-1">
              よくある質問
            </h1>
            <p className="text-sm sm:text-xl text-gray-600 leading-relaxed bg-pink-50 p-2.5 sm:p-4 rounded-lg sm:rounded-2xl">
              LinkMeについて、よくいただくご質問にお答えします 💭
            </p>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="space-y-3 sm:space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-8 border border-pink-100"
            >
              <div className="flex flex-col space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm sm:text-base font-bold text-pink-500">Q{faq.id}</span>
                  </div>
                  <h2 className="text-sm sm:text-lg font-bold text-gray-800 leading-relaxed">
                    {faq.question}
                  </h2>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm sm:text-base font-bold text-pink-600">A</span>
                  </div>
                  <p className="text-xs sm:text-base text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6 sm:mt-12">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-pink-400 text-white rounded-full font-bold hover:bg-pink-500 active:bg-pink-600 transition-colors shadow-lg"
          >
            🏠 プレスリリースに戻る
          </Link>
        </div>

        {/* Cross Page Links */}
        <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-xl sm:rounded-3xl p-4 sm:p-8 mt-6 sm:mt-12 shadow-sm border border-pink-100">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2">サービス一覧</h2>
            <p className="text-xs sm:text-sm text-gray-600">LinkMeの全サービスをチェック</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
            {/* Main Service Link */}
            <Link href="/" className="group">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-pink-100 hover:shadow-md transition-all duration-300 hover:border-pink-200">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-xl sm:text-2xl">💫</span>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-lg font-bold text-gray-800 group-hover:text-pink-500 transition-colors">LinkMe</h3>
                    <p className="text-xs sm:text-sm text-pink-500">参加者向けサービス</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  あなたにぴったりのイベントが見つかる。AIマッチング技術で理想的な出会いを。
                </p>
              </div>
            </Link>

            {/* Hosts Link */}
            <Link href="/hosts" className="group">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300 hover:border-blue-200">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xl sm:text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-lg font-bold text-gray-800 group-hover:text-blue-500 transition-colors">LinkMe for Hosts</h3>
                    <p className="text-xs sm:text-sm text-blue-500">主催者向けサービス</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  質の高い参加者だけが集まるイベント主催を実現。AIマッチング技術で理想的な集客を。
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-100 to-pink-200 py-6 sm:py-12">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 text-center">
          <div className="text-xl sm:text-3xl font-bold mb-2 sm:mb-4 font-pacifico text-pink-400">LinkMe</div>
          <p className="text-xs sm:text-base text-gray-700 mb-3 sm:mb-6 px-1">あなたにぴったりのイベントをお届けします 💕</p>
    
          <div className="mt-4 sm:mt-8 pt-4 sm:pt-8 border-t border-pink-200 text-gray-600 text-xs sm:text-sm">
            <div className="mb-2">
              運営会社：
              <a 
                href="https://37mo.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-600 font-medium hover:underline"
              >
                株式会社みなも
              </a>
            </div>
            <div>
              2025 LinkMe. All rights reserved. 🌸
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}