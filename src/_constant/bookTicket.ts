export const infoMovie = {
  id: 1,
  image: "/public/assets/images/PostersMovie/NowShowing/logo1.jpg",
  title: "DORAEMON THE MOVIE: NOBITA S EARTH SYMPHONY",
  desc: "Doraemon và những người bạn thực hiện chuyến phiêu lưu để gặp gỡ những người bạn mới, kết nối mọi người bằng âm nhạc và cứu thế giới khỏi khủng hoảng.",
  director: "Đạo diễn:",
  performer: "Diễn viên:",
  category: "Thể loại:",
  premiere: "Khởi chiếu:",
  time: "Thời lượng:",
  colorMargin: "text-#ccc mr-1.5 mb-2"
};

export const logoforTicket = {
    id: 1,
    image: '/public/assets/images/Logo/logo.png'
}

    // Data tạm thời
export const showTimeMovies = [
        {
            id: 1, 
            theater: 'BHD Star The Garden', 
            address: 'Tầng 4 & 5, TTTM The Garden, khu đô thị The Manor, đường Mễ Trì, phường Mỹ Đình 1, quận Nam Từ Liêm, Hà Nội',
            timeandtype: [
                {id:1, time: '10:05', audio: 'Lồng tiếng',video: '2d'},
                {id:2, time: '11:55', audio: 'Lồng tiếng',video: '2d'},
                {id:3, time: '23:30', audio: 'Lồng tiếng',video: '2d'},
                {id:4, time: '23:30', audio: 'Lồng tiếng',video: '2d'},
                {id:5, time: '23:30', audio: 'Lồng tiếng',video: '2d'},
                {id:6, time: '23:30', audio: 'Lồng tiếng',video: '2d'},
            ]
        },
        {
            id: 2, 
            theater: 'BHD Star Le Van Viet', 
            address: 'Tầng 4, Vincom Plaza Lê Văn Việt, 50 Lê Văn Việt, P.Hiệp Phú, Quận 9, TP.HCM',
            timeandtype: [
                {id:1, time: '10:05', audio: 'Phụ đề',video: '2d'},
                {id:2, time: '11:55', audio: 'Phụ đề',video: '2d'},
                {id:3, time: '23:30', audio: 'Lồng tiếng',video: '2d'},
                {id:4, time: '23:30', audio: 'Lồng tiếng',video: '2d'}
            ]
        },
        {
            id: 3, 
            theater: 'BHD Star Discovery', 
            address: 'Tầng 8, TTTM Discovery - 302 Cầu Giấy , Hà Nội',
            timeandtype: [
                {id:1, time: '10:05', audio: 'Phụ đề',video: '2d'},
            ]
        }
    ]
