let moviesList = [
    {
        id:0,
        title:"Doraemon - Tập 497 - Vượt Qua Mùa Hè Trong Ngôi Nhà Tí Hon",
        author:"POP Kids",
        src:"https://www.youtube.com/embed/e_30PQAWYKg",
        content:"Doraemon (tiếng Nhật: ドラえもん [doɾaemoɴ]) là một series manga của Nhật Bản do Fujiko F. Fujio sáng tác từ tháng 12 năm 1969 đến tháng 4 năm 1996 đăng trên tạp chí CoroCoro Comic của nhà xuất bản Shogakukan. Có tổng cộng 821 chương truyện được tuyển chọn đóng gói đưa vào 45 tập tankōbon dưới ấn hiệu Tentōmushi Comics cũng do Shogakukan xuất bản. Manga đã được dịch và xuất bản bằng nhiều ngôn ngữ trên thế giới, trong đó bao gồm cả tiếng Việt do Nhà xuất bản Kim Đồng biên soạn."
    },
    {
        id:1,
        title:"Doraemon - Tập 430 - Kẹo Nhại Tiếng - Đèn Pin Trở Về Nguyên Thủy",
        author:"POP Kids",
        src:"https://www.youtube.com/embed/hSvkzXZPYQg",
        content:"Nội dung series kể về cuộc đời bất hạnh của cậu bé Nobita và chú mèo máy Doraemon từ tương lai đến để giúp cuộc sống của cậu bé trở nên tốt hơn. Tác phẩm ba lần được chuyển thể thành anime: lần đầu do Nippon TV Dōga sản xuất gồm 52 tập phát sóng trên Nippon TV từ 1 tháng 4 đến 30 tháng 9 năm 1973; lần thứ hai do Shin-Ei Animation sản xuất với 1787 tập phát từ 2 tháng 4 năm 1979 đến 18 tháng 3 năm 2005 trên TV Asahi và lần thứ ba cũng do Shin-Ei Animation sản xuất phát trên TV Asahi từ 15 tháng 4 năm 2005 đến nay. Tác phẩm cũng được chuyển thể thành các loại hình truyền thông khác như phim điện ảnh và trò chơi điện tử."

    },
    {
        id:2,
        title:"Tuyển Tập Doraemon - Phần 70 - Bắt Cóc Suneo, Máy Bay Côn Trùng",
        author:"POP Kids",
        src:"https://www.youtube.com/embed/v4OfQKr-eT4",
        content:"Tính đến năm 2019, với hơn 250 triệu bản in được bán ra trên thế giới, Doraemon được coi như là một trong những series manga nổi tiếng và thành công nhất mọi thời đại. Được nhiều nhà phê bình và chuyên gia khen ngợi, một số mangaka nổi tiếng nói rằng Doraemon đã truyền cảm hứng cho tác phẩm của họ, chẳng hạn như Oda Eiichirō, Kishimoto Masashi và Takahashi Rumiko. Ngoài ra, Doraemon cũng chính thức trở thành một trong những thương hiệu truyền thông có doanh thu cao nhất mọi thời đại, trong đó loạt phim hoạt hình cùng tên có số lượng người xem cao nhất tại Nhật Bản và các quốc gia trên thế giới."

    },
    {
        id:3,
        title:"Doraemon Tập 292 - Trò Chơi người Thật Của Tương Lai, Thám Tử Nobita",
        author:"POP Kids",
        src:"https://www.youtube.com/embed/Y9aVQrQVHG8",
        content:"Doraemon (tiếng Nhật: ドラえもん [doɾaemoɴ]) là một series manga của Nhật Bản do Fujiko F. Fujio sáng tác từ tháng 12 năm 1969 đến tháng 4 năm 1996 đăng trên tạp chí CoroCoro Comic của nhà xuất bản Shogakukan. Có tổng cộng 821 chương truyện được tuyển chọn đóng gói đưa vào 45 tập tankōbon dưới ấn hiệu Tentōmushi Comics cũng do Shogakukan xuất bản. Manga đã được dịch và xuất bản bằng nhiều ngôn ngữ trên thế giới, trong đó bao gồm cả tiếng Việt do Nhà xuất bản Kim Đồng biên soạn."
    },
];

let movies = document.getElementById("left-content")
for(let i = 0; i < moviesList.length; i++) {
    movies.innerHTML += `<div class="left-items" >
                            <iframe
                                id="video2"
                                width="964"
                                height="542"
                                src=${moviesList[i].src}
                                title=${moviesList[i].title}
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            ></iframe>
                            <h4 class="left-title">
                                ${moviesList[i].title}
                            </h4>
                            <p class="left-author">${moviesList[i].author}</p>
                        </div>`
}

let rightItems = document.getElementById("right-items");

let leftItems = document.getElementsByClassName("left-items");
for (let i = 0; i < leftItems.length; i++) {
  leftItems[i].addEventListener("click", function() {
    rightItems.innerHTML = `
                            <iframe
                                width="964"
                                height="542"
                                src=${moviesList[i].src}
                                title=${moviesList[i].title}
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            ></iframe>
                            <h4 class="right-title">
                                ${moviesList[i].title}
                            </h4>
                            <p class="right-author">${moviesList[i].author}</p>
                            <p >${moviesList[i].content}</p>
                        `
  });
}
console.log(leftItems)