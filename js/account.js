// ĐĂNG KÝ

function frmValidate(frm){
    var name= frm.name;
    var birthday= frm.birthday;
    var gioitinh= frm.gioitinh;
    var diachi= frm.diachi;
    var sdt= frm.sdt;
    var mk= frm.mk;
    var pre_mk= frm.pre_mk;
    var mail= frm.mail;
    var filter= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    

    //kt họ tên không rỗng
    if(name.value.length == 0){
        alert("Hãy điền họ tên!");
        name.focus();
        return false;
    }
    //kt Giới tính khác "chon";
    if(gioitinh.value == "chon"){
        alert("Hãy chọn giới tính!");
        gioitinh.focus();
        return false;
    }

    //kt Ngày sinh không rỗng
    if(birthday.value == 0){
        alert("Hãy chọn Ngày sinh!");
        birthday.focus();
        return false;
    }
    // Ngày sinh nhỏ hơn ngày hiện hành
    var today = new Date();
    var d = new Date(birthday.value);
    if(d > today){
        alert("Ngày sinh phải nhỏ hơn ngày hiện hành!");
        birthday.focus();
        return false;
    }

    //kt Địa chỉ không rỗng
    if(diachi.value.length == 0){
        alert("Hãy điền Địa chỉ!");
        diachi.focus();
        return false;
    }

    //SDT Nhập chuỗi số 10 ký tự
    if(sdt.value.length < 10){
        alert("Nhập số điện thoại 10 chữ số!");
        sdt.focus();
        return false;
    }

   //Mail đúng chuẩn biểu thức chính quy
   //Email chỉ chấp nhận
    /*ký tự HOA
    ký tự thường
    chữ số
    ký tự đặc biệt =_.
    một ký tự @, theo sau là các ký tự
    kết thúc bằng dấu . và tối thiểu 2 ký tự, tối đa 4 ký tự
    */      
       //kt mail không rỗng
    if(mail.value == 0){
        alert("Hãy Nhập mail!");
        mail.focus();
        return false;
    }
   
   if(!filter.test(mail.value)){
        alert("Hãy nhập đúng định dạng Mail!");
        mail.focus();
        return false;
    }
    //kiểm tra mk không rỗng
    if(mk.value == 0){
        alert("Hãy Nhập mk!");
        mk.focus();
        return false;
    }
    //kiểm tra pre mk không rỗng
    if(pre_mk.value == 0){
        alert("Hãy nhập lai mk!");
        pre_mk.focus();
        return false;
    }
    /*
    Mật khẩu phải chứa ít nhất
    1 ký tự HOA
    1 ký tự thường
    1 chữ số
    1 ký tự đặc biệt
    độ dài tối thiểu 8 ký tự
    */

    //mật khẩu
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    
    if(strongRegex.test(mk.value) == false){
        alert("Mk có ký tự in HOA, thường, ký tự đặc biệt và số!");
        mk.focus();
        return false;
    }
    //Nhập lại Mật khẩu: 
    //kiểm tra đúng với trường mật khẩu đã nhập trước đó
    if(mk.value != pre_mk.value){
        alert("Nhập lại mk không trùng khớp");
        pre_mk.focus();
        return false;
    }
    alert("Đăng ký thành công!");
    return true;
}
// ĐĂNG NHẬP
var account = '{"nhanvien":[{"username":"0123456789", "password":"abc@1234"}]}';
		
		obj = JSON.parse(account); 
		
function frmValidate2(){
    var frm = document.forms['login'];
    var phonenumber = frm.phonenumber;
    var password = frm.password;
    if((phonenumber.value == obj.nhanvien[0].username) 
    && (password.value == obj.nhanvien[0].password) )
    {
        alert("Đăng nhập thành công!");
        return true;
    }
        
        else{
            alert("Tên đăng nhập hoặc mật khẩu sai!");
            return false;
        }
            
}

function checkAd() {
    var code = document.getElementById('code').value;
    if (code=='adadad'){
        alert("Xin chào admin!");
        window.location.href = 'admin.html';
    }
    else 
        alert("Mã quản trị sai!");
}