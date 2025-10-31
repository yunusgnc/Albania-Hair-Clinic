import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Bitrix24 webhook URL - environment variable'dan al
    const BITRIX24_WEBHOOK =
      process.env.BITRIX24_WEBHOOK ||
      "https://cdn.bitrix24.com.tr/b26357199/rest/YOUR_USER_ID/YOUR_WEBHOOK_TOKEN/crm.lead.add.json";

    // Bitrix24'e istek gönder
    const response = await axios.post(BITRIX24_WEBHOOK, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Başarılı yanıt
    return NextResponse.json(
      {
        success: true,
        data: response.data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Bitrix24 API Error:", error);

    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        {
          success: false,
          error: error.response?.data || error.message,
        },
        { status: error.response?.status || 500 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}

