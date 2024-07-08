
// url 값을 뽑기 위한 js 파일



function get_info_url() {
  let url = location.href;
  url = url.split("?"); // html, cateNo=1
  console.log(url);
  url = url[1].split("="); // cateNo, 1
  console.log(url);
  let cateNo = url[1];
  console.log(cateNo)

  return cateNo;
}
