import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

chromium.setHeadlessMode = true;
chromium.setGraphicsMode = false;

export const handler = async () => {
  const browser = await puppeteer.launch({
    executablePath: await chromium.executablePath(
      "https://github.com/Sparticuz/chromium/releases/download/v113.0.1/chromium-v113.0.1-pack.tar",
    ),
    defaultViewport: chromium.defaultViewport,
    args: chromium.args,
    headless: true,
  });

  try {
    const page = await browser.newPage();

    await page.goto(
      "https://ringgitplus.com/en/blog/petrol-credit-card/petrol-price-malaysia-live-updates-ron95-ron97-diesel.html",
    );

    await page.waitForSelector(
      "#single_container > div.container-1232.px-40.background-white.py-32 > div.columns > div.column.column_wide > div.scontent.portfolio__content > figure:nth-child(12) > table",
    );

    const data = await page.evaluate(() => {
      const priceTable = document.querySelectorAll(
        "#single_container > div.container-1232.px-40.background-white.py-32 > div.columns > div.column.column_wide > div.scontent.portfolio__content > figure:nth-child(12) > table tr",
      );

      const data = [];
      Array.from(priceTable).map((element, index) => {
        if (index > 0) {
          let date = element.querySelector("td:nth-of-type(1)").innerText;
          date = date.split(" – ");

          let ron95 = element.querySelector("td:nth-of-type(2)").innerText;
          ron95 = ron95.replaceAll("RM", "RM ").split(/\s+\(|\)/);
          let ron97 = element.querySelector("td:nth-of-type(3)").innerText;
          ron97 = ron97.replaceAll("RM", "RM ").split(/\s+\(|\)/);
          let diesel = element.querySelector("td:nth-of-type(4)").innerText;
          diesel = diesel.replaceAll("RM", "RM ").split(/\s+\(|\)/);

          const cur = {
            from: date[0],
            through: date[1],
            ron95: [ron95[0], ron95[1]],
            ron97: [ron97[0], ron97[1]],
            diesel: [diesel[0], diesel[1]],
          };

          data.push(cur);
        }
      });
      return Promise.resolve(data);
    });
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin": "https://petrol.krsn.xyz", // Replace with your React app's domain
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    };
  } catch (e) {
    console.log("error", e);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "internal server error",
      }),
    };
  } finally {
    browser.close();
  }
};
