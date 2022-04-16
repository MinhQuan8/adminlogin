function submitForm(event){ 
   event.preventDefault();
  var user = document.getElementById("user");
  var pass = document.getElementById("pass");
  //MINH QUAN
  if (user.value=="MinhQuan" && pass.value=="0001") {
    window.location="https://www.dropbox.com/sh/9zigz1qboy32lq8/AABqtJmWeH3XC6o5rS9-eDH2a?dl=0";
  } 
  //THANH DAT
  else if (user.value=="ThanhDat" && pass.value=="0002") {
    window.location="https://www.dropbox.com/sh/d14yik1pk9txekx/AADiQVrD0IpM7Hw13h1GRlEBa?dl=0";
  //CHIEN THANG
  } else if (user.value=="ChienThang" && pass.value=="0003") {
    window.location="https://www.dropbox.com/sh/x5mfv8fasmdxh8j/AADbwd-TUL98DWbp2ovRJOuqa?dl=0";
    //MINH NHUT
  } else if (user.value=="MinhNhut" && pass.value=="0004") {
    window.location="https://www.dropbox.com/sh/er6ftesu8jm886t/AADy1pEaNZ6VnqBcgDVxSck7a?dl=0";
    //HONG PHUC
  } else if (user.value=="HongPhuc" && pass.value=="0005") {
    window.location="https://www.dropbox.com/sh/nvk84dkhbpe13bz/AAA_Jcb5d4gPJbZJiR6QtcYaa?dl=0";
    //HOAI KHA
  } else if (user.value=="HoaiKha" && pass.value=="0006") {
    window.location="https://www.dropbox.com/sh/ta30b4j6expl6ry/AABfI_aUYKEzA1iSOQmkpTNta?dl=0";
    //TUAN PHAT
  } else if (user.value=="TuanPhat" && pass.value=="0007") {
    window.location="https://www.dropbox.com/sh/o3qq4ndtm02php6/AADkWcuDHDL7Q6R4k1jzAypxa?dl=0";
    //LE KHANG
  } else if (user.value=="LeKhang" && pass.value=="0008") {
    window.location="https://www.dropbox.com/sh/at188ezu0yayj5s/AAAj5mxgpdBREks-9fOM7Lnta?dl=0";
    //XUAN TRUONG
  } else if (user.value=="XuanTruong" && pass.value=="0009") {
    window.location="https://www.dropbox.com/sh/nrnc9pzitas92g1/AADjh5klRMwSAFgwJHFX6VmXa?dl=0";
    //TRIEU VY
  } else if (user.value=="TrieuVy" && pass.value=="0010") {
    window.location="https://www.dropbox.com/sh/4p3lkrg4oklqly9/AAAWEvdy8U-behSVuMSPSDYha?dl=0";
  } else {
    window.alert("Sai mật khẩu hoặc tên đăng nhập!");
  }
}