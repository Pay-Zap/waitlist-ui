"use server";
export async function subscribe(formData: FormData) {
  try {
    const email = formData.get("email") as string;

    if (!email) {
      return { error: "Missing email" };
    }

    const sendyResponse = await fetch("http://sendy.payzap.com.pk/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        api_key: process.env.SENDY_API_KEY!,
        email,
        list: process.env.SENDY_LIST_ID!,
      }),
    });

    if (!sendyResponse.ok) {
      const errorText = await sendyResponse.text();
      return { error: `Failed to subscribe: ${errorText}` };
    }

    return { success: "Subscribed successfully!" };
  } catch (error) {
    console.error("Sendy API Error:", error);
    return { error: "An unexpected error occurred. Please try again later." };
  }
}
