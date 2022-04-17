function submitForm(event){ 
   event.preventDefault();
  var user = document.getElementById("user");
  var pass = document.getElementById("pass");
  //MINH QUAN
  if (user.value=="MinhQuan" && pass.value=="2008") {
    window.location="https://minhquan8.github.io/login-file/MinhQuan.rar";
  } 
  //THANH DAT
  else if (user.value=="ThanhDat" && pass.value=="2008") {
    window.location="https://minhquan8.github.io/login-file/ThanhDat.rar";
  //CHIEN THANG
  } else if (user.value=="ChienThang" && pass.value=="2008") {
    window.location="https://minhquan8.github.io/login-file/ChienThang.rar";
    //MINH NHUT
  } else if (user.value=="MinhNhut" && pass.value=="2008") {
    window.location="https://minhquan8.github.io/login-file/MinhNhut.rar";
    //HONG PHUC
  } else if (user.value=="HongPhuc" && pass.value=="2008") {
    window.location="https://minhquan8.github.io/login-file/HongPhuc.rar";
    //HOAI KHA
  } else if (user.value=="HoaiKha" && pass.value=="2008") {
    window.location="https://minhquan8.github.io/login-file/HoaiKha.rar";
    //TUAN PHAT
  } else if (user.value=="TuanPhat" && pass.value=="2008") {
    window.location="https://minhquan8.github.io/login-file/TuanPhat.rar";
    //LE KHANG
  } else if (user.value=="LeKhang" && pass.value=="2008") {
    window.location="https://minhquan8.github.io/login-file/LeKhang.rar";
    //XUAN TRUONG
  } else if (user.value=="XuanTruong" && pass.value=="2008") {
    window.location="https://minhquan8.github.io/login-file/XuanTruong.rar";
    //TRIEU VY
  } else if (user.value=="TrieuVy" && pass.value=="2008") {
    window.location="https://minhquan8.github.io/login-file/TrieuVy.rar";

  } else if (user.value=="Control" && pass.value=="2008") {
    window.location="https://minhquan8.github.io/login-file/";
  } else {
    window.alert("Sai mật khẩu hoặc tên đăng nhập!");
  }
}