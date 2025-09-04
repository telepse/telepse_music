import { NextResponse } from "next/server";

// Local imports
import mailchimp from "@/lib/mailchimp";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID as string,
      {
        email_address: email,
        status: "subscribed",
      }
    );

    return NextResponse.json({ message: "Successfully subscribed!", response });
  } catch (err: unknown) {
    // Narrow the error type
    if (typeof err === "object" && err !== null && "response" in err) {
      const errorObj = err as { response?: { body?: { detail?: string } } };
      const detail = errorObj.response?.body?.detail;

      if (detail?.includes("is already a list member")) {
        return NextResponse.json(
          { message: "Already subscribed" },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { error: detail || "Subscription failed" },
        { status: 400 }
      );
    }

    // Fallback for unexpected error shapes
    return NextResponse.json(
      { error: "Unexpected error occurred" },
      { status: 500 }
    );
  }
}
