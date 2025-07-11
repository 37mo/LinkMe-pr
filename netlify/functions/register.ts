import { Handler } from "@netlify/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event) => {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  // Handle preflight requests
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { email, name } = JSON.parse(event.body || "{}");

    // API key の存在確認
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: "サーバー設定エラー: API Key が設定されていません",
        }),
      };
    }

    if (!email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "メールアドレスが必要です" }),
      };
    }

    // 先行登録の確認メールを送信
    const { data, error } = await resend.emails.send({
      from: "LinkMe <linkme@37mo.com>",
      to: [email],
      subject: "🎉 LinkMe先行登録ありがとうございます！",
      html: `
        <div style="font-family: 'Noto Sans JP', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(to bottom right, #fdf2f8, #fce7f3);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #f472b6; font-size: 28px; margin-bottom: 10px;">LinkMe</h1>
            <p style="color: #666; font-size: 16px;">あなたにぴったりのイベントをお届け</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #f472b6; font-size: 24px; margin-bottom: 20px; text-align: center;">🎉 先行登録ありがとうございます！</h2>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              ${name ? `${name}さん、` : ""}この度はLinkMeの先行登録をしていただき、ありがとうございます！
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              LinkMeは、あなたの価値観や興味関心に基づいて、自動的にイベントをレコメンドするマッチング型イベントアプリです。
            </p>
            
            <div style="background: linear-gradient(to right, #fdf2f8, #fce7f3); padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #f472b6; font-size: 18px; margin-bottom: 15px;">✨ 先行登録特典 ✨</h3>
              <ul style="color: #333; font-size: 16px; line-height: 1.6; margin: 0; padding-left: 20px;">
                <li>リリース時の優先案内</li>
                <li>β版テスト参加権</li>
              </ul>
            </div>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              サービスの準備が整い次第、改めてご連絡させていただきます。<br>
              今しばらくお待ちください 💕
            </p>
            
            <div style="background: #fef3f7; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <h3 style="color: #f472b6; font-size: 18px; margin-bottom: 15px;">🌟 詳細はWebサイトでチェック！</h3>
              <div style="margin-bottom: 10px;">
                <a href="https://linkme-pr.netlify.app/" style="color: #f472b6; text-decoration: none; font-weight: bold; font-size: 16px;">
                  📱 LinkMe（参加者向け）
                </a>
              </div>
              <div>
                <a href="https://linkme-pr.netlify.app/hosts" style="color: #60a5fa; text-decoration: none; font-weight: bold; font-size: 16px;">
                  🎯 LinkMe for Hosts（主催者向け）
                </a>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #666; font-size: 14px;">
                運営会社：株式会社みなも<br>
                <a href="https://37mo.com/" style="color: #f472b6; text-decoration: none;">https://37mo.com/</a>
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: "メール送信に失敗しました",
          details: error.message || error,
        }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "先行登録が完了しました。確認メールをお送りしました。",
        emailId: data?.id,
      }),
    };
  } catch (error) {
    console.error("Registration error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "エラーが発生しました" }),
    };
  }
};
