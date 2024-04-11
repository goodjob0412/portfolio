const DATA_LIST =[
    [//뉴스
        {list_no: 1, item_name: 'OO씨와 OO씨의 열애설', user_name: 'user1', day: '2023-12-20'},
        {list_no: 2, item_name: '내일 기상예보', user_name: '놀고싶어21', day: '2023-12-21'},
        {list_no: 3, item_name: '현재 교통망 정보', user_name: 'rest222', day: '2023-12-22'},
        {list_no: 4, item_name: '오늘 예정인 축구 시합에 대하여', user_name: 'work11', day: '2023-12-23'},
        {list_no: 5, item_name: '손흥민 오늘도 득점 가능할지', user_name: '##54445', day: '2023-12-24'},
        {list_no: 6, item_name: '계속해서 늘어나는 망사용료', user_name: '#32%$35', day: '2023-12-25'},
        {list_no: 7, item_name: '주가하락 엔씨소프트의 전망', user_name: '#$$21#5', day: '2023-12-26'},
        {list_no: 8, item_name: '집세 언제 떨어지나....', user_name: '#54415$', day: '2023-12-27'},
        {list_no: 9, item_name: '삼성 노조 설립 드디어 숨통트나', user_name: '안경싫어', day: '2023-12-28'},
        {list_no: 10, item_name: '오늘의 뉴스', user_name: '집돌이', day: '2023-12-29'},
        {list_no: 11, item_name: '오늘의 뉴스', user_name: 'rewwwer', day: '2023-12-30'},
        {list_no: 12, item_name: '오늘의 뉴스', user_name: 'kfiebnv', day: '2023-12-31'},
        {list_no: 13, item_name: '오늘의 뉴스', user_name: 'dfk454', day: '2024-01-01'},
        {list_no: 14, item_name: '오늘의 뉴스', user_name: 'sdse443', day: '2024-01-02'},
        {list_no: 15, item_name: '오늘의 뉴스', user_name: 'ssdef55', day: '2024-01-03'},
        {list_no: 16, item_name: '오늘의 뉴스', user_name: '1212ddf', day: '2024-01-04'},
        {list_no: 17, item_name: '오늘의 뉴스', user_name: '5656dfdsa', day: '2024-01-05'},
        {list_no: 18, item_name: '오늘의 뉴스', user_name: 'iouyj785', day: '2024-01-06'},
        {list_no: 19, item_name: '오늘의 뉴스', user_name: 'kdi7564', day: '2024-01-07'},
        {list_no: 20, item_name: '오늘의 뉴스', user_name: 'treri21', day: '2024-01-08'},
        {list_no: 21, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 22, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 23, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 24, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 25, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 26, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 27, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 28, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 29, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 30, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 31, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 32, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 33, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 34, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 18, item_name: '오늘의 뉴스', user_name: 'iouyj785', day: '2024-01-06'},
        {list_no: 19, item_name: '오늘의 뉴스', user_name: 'kdi7564', day: '2024-01-07'},
        {list_no: 20, item_name: '오늘의 뉴스', user_name: 'treri21', day: '2024-01-08'},
        {list_no: 21, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 22, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 23, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 24, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 25, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 26, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 27, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 28, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 29, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 30, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 31, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 32, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 33, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 34, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 18, item_name: '오늘의 뉴스', user_name: 'iouyj785', day: '2024-01-06'},
        {list_no: 19, item_name: '오늘의 뉴스', user_name: 'kdi7564', day: '2024-01-07'},
        {list_no: 20, item_name: '오늘의 뉴스', user_name: 'treri21', day: '2024-01-08'},
        {list_no: 21, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 22, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 23, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 24, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 25, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 26, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 27, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 28, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 29, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 30, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 31, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 32, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 33, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 34, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 18, item_name: '오늘의 뉴스', user_name: 'iouyj785', day: '2024-01-06'},
        {list_no: 19, item_name: '오늘의 뉴스', user_name: 'kdi7564', day: '2024-01-07'},
        {list_no: 20, item_name: '오늘의 뉴스', user_name: 'treri21', day: '2024-01-08'},
        {list_no: 21, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 22, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 23, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 24, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 25, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 26, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 27, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 28, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 29, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 30, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 31, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 32, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 33, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 34, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 18, item_name: '오늘의 뉴스', user_name: 'iouyj785', day: '2024-01-06'},
        {list_no: 19, item_name: '오늘의 뉴스', user_name: 'kdi7564', day: '2024-01-07'},
        {list_no: 20, item_name: '오늘의 뉴스', user_name: 'treri21', day: '2024-01-08'},
        {list_no: 21, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 22, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 23, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 24, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 25, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 26, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 27, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 28, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 29, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 30, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 31, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 32, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 33, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 34, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 18, item_name: '오늘의 뉴스', user_name: 'iouyj785', day: '2024-01-06'},
        {list_no: 19, item_name: '오늘의 뉴스', user_name: 'kdi7564', day: '2024-01-07'},
        {list_no: 20, item_name: '오늘의 뉴스', user_name: 'treri21', day: '2024-01-08'},
        {list_no: 21, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 22, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 23, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 24, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 25, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 26, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 27, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 28, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 29, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 30, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 31, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 32, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 33, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 34, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 18, item_name: '오늘의 뉴스', user_name: 'iouyj785', day: '2024-01-06'},
        {list_no: 19, item_name: '오늘의 뉴스', user_name: 'kdi7564', day: '2024-01-07'},
        {list_no: 20, item_name: '오늘의 뉴스', user_name: 'treri21', day: '2024-01-08'},
        {list_no: 21, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 22, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 23, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 24, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 25, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 26, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 27, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 28, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 29, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 30, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 31, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 32, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 33, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 34, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 18, item_name: '오늘의 뉴스', user_name: 'iouyj785', day: '2024-01-06'},
        {list_no: 19, item_name: '오늘의 뉴스', user_name: 'kdi7564', day: '2024-01-07'},
        {list_no: 20, item_name: '오늘의 뉴스', user_name: 'treri21', day: '2024-01-08'},
        {list_no: 21, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 22, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 23, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 24, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 25, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 26, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 27, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 28, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 29, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 30, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 31, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 32, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 33, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 34, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 18, item_name: '오늘의 뉴스', user_name: 'iouyj785', day: '2024-01-06'},
        {list_no: 19, item_name: '오늘의 뉴스', user_name: 'kdi7564', day: '2024-01-07'},
        {list_no: 20, item_name: '오늘의 뉴스', user_name: 'treri21', day: '2024-01-08'},
        {list_no: 21, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 22, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 23, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 24, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 25, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 26, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 27, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 28, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 29, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 30, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 31, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 32, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 33, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 34, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 18, item_name: '오늘의 뉴스', user_name: 'iouyj785', day: '2024-01-06'},
        {list_no: 19, item_name: '오늘의 뉴스', user_name: 'kdi7564', day: '2024-01-07'},
        {list_no: 20, item_name: '오늘의 뉴스', user_name: 'treri21', day: '2024-01-08'},
        {list_no: 21, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 22, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 23, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 24, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 25, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 26, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 27, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 28, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 29, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 30, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 31, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 32, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 33, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 34, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 18, item_name: '오늘의 뉴스', user_name: 'iouyj785', day: '2024-01-06'},
        {list_no: 19, item_name: '오늘의 뉴스', user_name: 'kdi7564', day: '2024-01-07'},
        {list_no: 20, item_name: '오늘의 뉴스', user_name: 'treri21', day: '2024-01-08'},
        {list_no: 21, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 22, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 23, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 24, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 25, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 26, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 27, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 28, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 29, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 30, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 31, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 32, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 33, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 34, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 18, item_name: '오늘의 뉴스', user_name: 'iouyj785', day: '2024-01-06'},
        {list_no: 19, item_name: '오늘의 뉴스', user_name: 'kdi7564', day: '2024-01-07'},
        {list_no: 20, item_name: '오늘의 뉴스', user_name: 'treri21', day: '2024-01-08'},
        {list_no: 21, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 22, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 23, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 24, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 25, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 26, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 27, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 28, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 29, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 30, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 31, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 32, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 33, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 34, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 18, item_name: '오늘의 뉴스', user_name: 'iouyj785', day: '2024-01-06'},
        {list_no: 19, item_name: '오늘의 뉴스', user_name: 'kdi7564', day: '2024-01-07'},
        {list_no: 20, item_name: '오늘의 뉴스', user_name: 'treri21', day: '2024-01-08'},
        {list_no: 21, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 22, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 23, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 24, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 25, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 26, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 27, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 28, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 29, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 30, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 31, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 32, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 33, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 34, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 18, item_name: '오늘의 뉴스', user_name: 'iouyj785', day: '2024-01-06'},
        {list_no: 19, item_name: '오늘의 뉴스', user_name: 'kdi7564', day: '2024-01-07'},
        {list_no: 20, item_name: '오늘의 뉴스', user_name: 'treri21', day: '2024-01-08'},
        {list_no: 21, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 22, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 23, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 24, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 25, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 26, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 27, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 28, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 29, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 30, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 31, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 32, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 33, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 34, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 18, item_name: '오늘의 뉴스', user_name: 'iouyj785', day: '2024-01-06'},
        {list_no: 19, item_name: '오늘의 뉴스', user_name: 'kdi7564', day: '2024-01-07'},
        {list_no: 20, item_name: '오늘의 뉴스', user_name: 'treri21', day: '2024-01-08'},
        {list_no: 21, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 22, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 23, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 24, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 25, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 26, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 27, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 28, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 29, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 30, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 31, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 32, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 33, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 34, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 18, item_name: '오늘의 뉴스', user_name: 'iouyj785', day: '2024-01-06'},
        {list_no: 19, item_name: '오늘의 뉴스', user_name: 'kdi7564', day: '2024-01-07'},
        {list_no: 20, item_name: '오늘의 뉴스', user_name: 'treri21', day: '2024-01-08'},
        {list_no: 21, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 32, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 33, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 34, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 18, item_name: '오늘의 뉴스', user_name: 'iouyj785', day: '2024-01-06'},
        {list_no: 19, item_name: '오늘의 뉴스', user_name: 'kdi7564', day: '2024-01-07'},
        {list_no: 20, item_name: '오늘의 뉴스', user_name: 'treri21', day: '2024-01-08'},
        {list_no: 21, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 22, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 23, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 24, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 25, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 26, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 27, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 28, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 29, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 30, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 31, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 32, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 33, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 34, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 18, item_name: '오늘의 뉴스', user_name: 'iouyj785', day: '2024-01-06'},
        {list_no: 19, item_name: '오늘의 뉴스', user_name: 'kdi7564', day: '2024-01-07'},
        {list_no: 20, item_name: '오늘의 뉴스', user_name: 'treri21', day: '2024-01-08'},
        {list_no: 21, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 32, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 33, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 34, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 18, item_name: '오늘의 뉴스', user_name: 'iouyj785', day: '2024-01-06'},
        {list_no: 19, item_name: '오늘의 뉴스', user_name: 'kdi7564', day: '2024-01-07'},
        {list_no: 20, item_name: '오늘의 뉴스', user_name: 'treri21', day: '2024-01-08'},
        {list_no: 21, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 22, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 23, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 24, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 25, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 26, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 27, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 28, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'},
        {list_no: 29, item_name: '오늘의 뉴스', user_name: '쉬고싶어4', day: '2024-01-10'},
        {list_no: 30, item_name: '오늘의 뉴스', user_name: '쉬고싶어3', day: '2024-01-11'},
        {list_no: 31, item_name: '오늘의 뉴스', user_name: '쉬고싶어11', day: '2024-01-12'},
        {list_no: 32, item_name: '오늘의 뉴스', user_name: '쉬고싶어23', day: '2024-01-13'},
        {list_no: 33, item_name: '오늘의 뉴스', user_name: '쉬고싶어09', day: '2024-01-14'},
        {list_no: 34, item_name: '오늘의 뉴스', user_name: '쉬고싶어90', day: '2024-01-15'},
        {list_no: 18, item_name: '오늘의 뉴스', user_name: 'iouyj785', day: '2024-01-06'},
        {list_no: 19, item_name: '오늘의 뉴스', user_name: 'kdi7564', day: '2024-01-07'},
        {list_no: 20, item_name: '오늘의 뉴스', user_name: 'treri21', day: '2024-01-08'},
        {list_no: 21, item_name: '오늘의 뉴스', user_name: '쉬고싶어5', day: '2024-01-09'}
    ],
    [//정보
    {list_no: 1, item_name: '오늘 알아낸 게시판 신기능', user_name: '쉬고싶어767', day: '2023-12-20'},
    {list_no: 2, item_name: '버튜버 OOO 오늘 방송 쉰다고함', user_name: '놀고싶어334', day: '2023-12-21'},
    {list_no: 3, item_name: '집 들어왔는데 이거 뭐냐', user_name: 'rest254', day: '2023-12-22'},
    {list_no: 4, item_name: '오늘 점심에 먹은 돈까스~', user_name: 'work4353', day: '2023-12-23'},
    {list_no: 5, item_name: '휴가쓰고 쉬고 싶다.....', user_name: 'user333', day: '2023-12-24'},
    {list_no: 6, item_name: '오늘 생일인데 축하좀', user_name: 'user222', day: '2023-12-25'},
    {list_no: 7, item_name: '오늘 아침 편돌이 근황.avi', user_name: 'user111', day: '2023-12-26'},
    {list_no: 8, item_name: '오늘 근무 시간 왜이렇게 길지...', user_name: 'user234', day: '2023-12-27'},
    {list_no: 9, item_name: '정보게시판', user_name: 'user432', day: '2023-12-28'},
    {list_no: 10, item_name: '정보게시판', user_name: 'user456', day: '2023-12-29'},
    {list_no: 11, item_name: '정보게시판', user_name: 'user275', day: '2023-12-30'},
    {list_no: 12, item_name: '정보게시판', user_name: 'user275', day: '2023-12-31'},
    {list_no: 13, item_name: '정보게시판', user_name: 'user227', day: '2024-01-01'},
    {list_no: 14, item_name: '정보게시판', user_name: 'user229', day: '2024-01-02'},
    {list_no: 15, item_name: '정보게시판', user_name: 'user253', day: '2024-01-03'},
    {list_no: 16, item_name: '정보게시판', user_name: 'user575', day: '2024-01-04'},
    {list_no: 17, item_name: '정보게시판', user_name: 'user571', day: '2024-01-05'}
    ],
    [//유저
    {list_no: 1, item_name: '유저게시판', user_name: 'user575', day: '2023-12-20'},
    {list_no: 2, item_name: '유저게시판', user_name: '놀고싶어245', day: '2023-12-21'},
    {list_no: 3, item_name: '유저게시판', user_name: 'rest264', day: '2023-12-22'},
    {list_no: 4, item_name: '유저게시판', user_name: 'work564', day: '2023-12-23'},
    {list_no: 5, item_name: '유저게시판', user_name: 'user552', day: '2023-12-24'},
    {list_no: 6, item_name: '유저게시판', user_name: 'user5', day: '2023-12-25'},
    {list_no: 7, item_name: '유저게시판', user_name: 'user2227', day: '2023-12-26'},
    {list_no: 8, item_name: '유저게시판', user_name: 'user54247', day: '2023-12-27'},
    {list_no: 9, item_name: '유저게시판', user_name: 'user52722', day: '2023-12-28'},
    {list_no: 10, item_name: '유저게시판', user_name: 'user575666', day: '2023-12-29'},
    {list_no: 11, item_name: '유저게시판', user_name: 'user645', day: '2023-12-30'},
    {list_no: 12, item_name: '유저게시판', user_name: 'user987', day: '2023-12-31'},
    {list_no: 13, item_name: '유저게시판', user_name: 'user999', day: '2024-01-01'},
    {list_no: 14, item_name: '유저게시판', user_name: 'user986', day: '2024-01-02'},
    {list_no: 15, item_name: '유저게시판', user_name: 'user969', day: '2024-01-03'},
    {list_no: 16, item_name: '유저게시판', user_name: 'user9335', day: '2024-01-04'},
    {list_no: 17, item_name: '유저게시판', user_name: 'user9258', day: '2024-01-05'},
    {list_no: 18, item_name: '유저게시판', user_name: 'user9115', day: '2024-01-06'},
    {list_no: 19, item_name: '유저게시판', user_name: 'user9933', day: '2024-01-07'}
    ],
    [//커뮤니티
    {list_no: 1, item_name: '커뮤니티', user_name: 'user978', day: '2023-12-20'},
    {list_no: 2, item_name: '커뮤니티', user_name: '놀고싶어448', day: '2023-12-21'},
    {list_no: 3, item_name: '커뮤니티', user_name: 'rest855', day: '2023-12-22'},
    {list_no: 4, item_name: '커뮤니티', user_name: 'work865', day: '2023-12-23'},
    {list_no: 5, item_name: '커뮤니티', user_name: 'user875', day: '2023-12-24'},
    {list_no: 6, item_name: '커뮤니티', user_name: 'user888', day: '2023-12-25'},
    {list_no: 7, item_name: '커뮤니티', user_name: 'user844', day: '2023-12-26'},
    {list_no: 8, item_name: '커뮤니티', user_name: 'user845', day: '2023-12-27'},
    {list_no: 9, item_name: '커뮤니티', user_name: 'user856', day: '2023-12-28'},
    {list_no: 10, item_name: '커뮤니티', user_name: 'user8668', day: '2023-12-29'},
    {list_no: 11, item_name: '커뮤니티', user_name: 'user852', day: '2023-12-30'},
    {list_no: 12, item_name: '커뮤니티', user_name: 'user582', day: '2023-12-31'},
    {list_no: 13, item_name: '커뮤니티', user_name: 'user258', day: '2024-01-01'},
    {list_no: 14, item_name: '커뮤니티', user_name: 'user830', day: '2024-01-02'},
    {list_no: 15, item_name: '커뮤니티', user_name: 'user058', day: '2024-01-03'},
    {list_no: 16, item_name: '커뮤니티', user_name: 'user520', day: '2024-01-04'},
    {list_no: 17, item_name: '커뮤니티', user_name: 'user047', day: '2024-01-05'},
    {list_no: 18, item_name: '커뮤니티', user_name: 'user0587', day: '2024-01-06'},
    {list_no: 19, item_name: '커뮤니티', user_name: 'user8054', day: '2024-01-07'},
    {list_no: 20, item_name: '커뮤니티', user_name: 'user83350', day: '2024-01-08'},
    {list_no: 21, item_name: '커뮤니티', user_name: 'user83660', day: '2024-01-09'},
    {list_no: 22, item_name: '커뮤니티', user_name: 'user8750', day: '2024-01-10'},
    {list_no: 23, item_name: '커뮤니티', user_name: 'user7751', day: '2024-01-11'},
    {list_no: 24, item_name: '커뮤니티', user_name: 'user1745', day: '2024-01-12'},
    {list_no: 25, item_name: '커뮤니티', user_name: 'user1574', day: '2024-01-13'},
    {list_no: 26, item_name: '커뮤니티', user_name: 'user4457', day: '2024-01-14'},
    {list_no: 27, item_name: '커뮤니티', user_name: 'user7620', day: '2024-01-15'}
    ],
    [//공지사항
    {list_no: 1, item_name: '게시판 사용규칙', user_name: 'user5542', day: '2023-12-20'},
    {list_no: 2, item_name: '게시판 금지사항', user_name: '놀고싶어4', day: '2023-12-21'},
    {list_no: 3, item_name: '글작성 요령', user_name: 'rest88', day: '2023-12-22'},
    {list_no: 4, item_name: '금지어 모음', user_name: 'work88', day: '2023-12-23'},
    {list_no: 5, item_name: '게시판 안내', user_name: 'user4235', day: '2023-12-24'},
    {list_no: 6, item_name: '서버 점검일자 공지', user_name: 'user8652', day: '2023-12-25'},
    {list_no: 7, item_name: '차단당한 유저 목록', user_name: 'user2200', day: '2023-12-26'},
    {list_no: 8, item_name: '중요 공지 주소목록', user_name: 'user0024', day: '2023-12-27'},
    {list_no: 9, item_name: '공지사항', user_name: 'user4057', day: '2023-12-28'},
    {list_no: 10, item_name: '공지사항', user_name: 'user5394', day: '2023-12-29'},
    {list_no: 11, item_name: '공지사항', user_name: 'user2520', day: '2023-12-30'},
    {list_no: 12, item_name: '공지사항', user_name: 'user025724', day: '2023-12-31'},
    {list_no: 13, item_name: '공지사항', user_name: 'user5737', day: '2024-01-01'},
    {list_no: 14, item_name: '공지사항', user_name: 'user2535', day: '2024-01-02'}
    ]
]

const LIST_ARR = ['news', 'info', 'user', 'commu', 'noti'];
const LIST_TITLE = ['NEWS', 'INFO', 'USER', 'COMMU', '공지사항']


function load_item(cate){ 
    let each_page_qty = 20; // 한페이지당 보여줄 게시글 개수
    let group_page_qty = 10; // 한번에 보여줄 페이지 수 

    let list_length = DATA_LIST[cate].length; // 전체 글 개수
    let total_page = list_length / each_page_qty; // 전체 페이지 수
    let remain_list = list_length % each_page_qty; // 나머지 글 개수
    
    let page = get_info_from_url("page")!=null?get_info_from_url("page"):1 // 현재 페이지

    if(remain_list > 0){
        total_page += 1; // 나머지 글 개수가 0 이상이면 페이지 하나 추가
    }
    let last_page = page*each_page_qty; // 게시글 수 * 현재 페이지 위치
    if(list_length < last_page){
        last_page = list_length // 전체 글 개수가 적으면 덧씌우기
    }
    
    let page_search = (Math.floor((page-1) / group_page_qty) ); 
    let start_page = (page_search)*group_page_qty
    let end_page = start_page + group_page_qty
    if(total_page < end_page){
        end_page = total_page
    }

    $('.list_title > h1').text(LIST_TITLE[cate])

    for(let i=(page-1)*each_page_qty; i<last_page; i++){
        $('.data_list > .list_box').append(`
            <div class="data_item">
                <div class="data_num">${DATA_LIST[cate][i].list_no}</div>
                <div class="data_title"><a href="포트폴리오_상세내용.html?cateNo=${cate}&itemNo=${DATA_LIST[cate][i].list_no}">${DATA_LIST[cate][i].item_name}</a></div>
                <div class="data_user">${DATA_LIST[cate][i].user_name}</div>
                <div class="data_day">${DATA_LIST[cate][i].day}</div>
            </div>
        `)
    }
    $('.creat_data').append(`<a href="./포트폴리오_글작성.html?cateNo=${cate}">글쓰기</a>`)
    $('.goto').append(`<a href="./포트폴리오_게시판(스마트폰).html?cateNo=${cate}&page=${page}">모바일로 가기</a>`)
    make_page(start_page, group_page_qty, end_page, total_page, cate, "포트폴리오_게시판")
}

function load_item_m(cate){
    let each_page_qty = 15;
    let group_page_qty = 10;

    let list_length = DATA_LIST[cate].length;
    let total_page = list_length / each_page_qty;
    let remain_list = list_length % each_page_qty;
    
    let page = get_info_from_url("page")!=null?get_info_from_url("page"):1
    if(remain_list > 0){
        total_page += 1;
    }
    let last_page = page*each_page_qty;
    if(list_length < last_page){
        last_page = list_length
    }
    
    let page_search = (Math.floor((page-1) / group_page_qty) ); 
    let start_page = (page_search)*group_page_qty
    let end_page = start_page + group_page_qty
    if(total_page < end_page){
        end_page = total_page
    }

    $('.list_title > h1').text(LIST_TITLE[cate])

    for(let i=(page-1)*each_page_qty; i<last_page; i++){
        $('.data_list > .list_box').append(`
            <div class="data_item">
                <div class="data_num">${DATA_LIST[cate][i].list_no}</div>
                <div class="data_title"><a href="포트폴리오_상세내용(스마트폰).html?cateNo=${cate}&itemNo=${DATA_LIST[cate][i].list_no}">${DATA_LIST[cate][i].item_name}</a></div>
                <div class="data_user">${DATA_LIST[cate][i].user_name}</div>
                <div class="data_day">${DATA_LIST[cate][i].day}</div>
            </div>
        `)
    }
    $('.creat_data').append(`<a href="./포트폴리오_글작성(스마트폰).html?cateNo=${cate}">글쓰기</a>`)
    $('.goto').append(`<a href="./포트폴리오_게시판.html?cateNo=${cate}&page=${page}">PC로 가기</a>`)
    make_page(start_page, group_page_qty, end_page, total_page, cate, "포트폴리오_게시판(스마트폰)")
}

function make_page(start, group, end, total, cate, html){
    $('.data_page').children().remove();
    if(start > 1) {
        $('.data_page').append(`<div class="page_forward"><a href="${html}.html?cateNo=${cate}&page=${start-group+1}">이전</a></div>`)    
    }

    for(let i=start+1; i<=end; i++) {
        $('.data_page').append(`<div class="page_num"><a href="${html}.html?cateNo=${cate}&page=${i}">${i}</a></div>`)

    }
    if(end < total) {
        $('.data_page').append(`<div class="page_next"><a href="${html}.html?cateNo=${cate}&page=${end+1}">다음</a></div>`)    
    }
}
function main_info(cate, num, html){
    for(let i=0; i<num; i++){
        $(`.g_pan > .${LIST_ARR[cate]}`).append(`
            <div class="g_pan_item">
                <div class="gp_item_title"><a href="${html}.html?cateNo=${cate}&itemNo=${DATA_LIST[cate][i].list_no}">${DATA_LIST[cate][i].item_name}</a></div>
                <div class="gp_item_user">${DATA_LIST[cate][i].user_name}</div>
            </div>
        `)
    }
}

function get_info_from_url(keyword) {
    let url = location.href;
    
    url = url.split("?")
    if(url.length > 1) {
        url = url[1].split("&")
        for(let i=0; i<url.length; i++) {
            let tmp_url = url[i].split("=");

            if(tmp_url[0] == keyword) {
                return tmp_url[1]
            }
        }
    }
    return null;
}