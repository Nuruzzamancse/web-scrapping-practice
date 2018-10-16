const puppeteer = require('puppeteer');

let bookingUrl = 'https://www.booking.com/searchresults.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGgUiAEBmAExwgEDeDExyAEM2AEB6AEB-AECkgIBeagCAw;sid=4f05cd9b55e6b78d255b13548a643b7d;ac_position=0&checkin_month=10&checkin_monthday=29&checkin_year=2018&checkout_month=10&checkout_monthday=30&checkout_year=2018&class_interval=1&dest_id=-73635&dest_type=city&dtdisc=0&from_sf=1&group_adults=2&group_children=0&iata=SIN&inac=0&index_postcard=0&label_click=undef&no_rooms=1&offset=0&postcard=0&raw_dest_type=city&room1=A%2CA&sb_price_type=total&search_selected=1&slp_r_match=0&src=index&src_elem=sb&ss=Singapore%2C%20Singapore&ss_all=0&ss_raw=singapore&ssb=empty&sshis=0&';
(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 926 });
    await page.goto(bookingUrl);

    // get hotel details
    let hotelData = await page.evaluate(() => {
        let hotels = [];
        // get the hotel elements
        let hotelsElms = document.querySelectorAll('div.sr_property_block[data-hotelid]');
        // get the hotel data
        hotelsElms.forEach((hotelelement) => {
            let hotelJson = {};
            try {
                hotelJson.name = hotelelement.querySelector('span.sr-hotel__name').innerText;
                hotelJson.reviews = hotelelement.querySelector('span.review-score-widget__subtext').innerText;
                hotelJson.rating = hotelelement.querySelector('span.review-score-badge').innerText;
                if(hotelelement.querySelector('strong.price')){
                    hotelJson.price = hotelelement.querySelector('strong.price').innerText;
                }
            }
            catch (exception){

            }
            hotels.push(hotelJson);
        });
        return hotels;
    });

    console.dir(hotelData);
})();