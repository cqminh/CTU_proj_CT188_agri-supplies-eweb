var itemList={	"sp001":{"name":"Đất sạch hữu cơ trồng cây ăn quả","price":500000,"photo":"img/dat-sach-huu-co-trong-cay-an-qua-sfarm-20l-78.jpg"},
				"sp002":{"name":"Đất sạch hữu cơ trồng rau ăn lá","price":500000,"photo":"img/dat-sach-huu-co-trong-rau-an-la-sfarm-76.jpg"},
				"sp003":{"name":"Đất sạch hữu cơ trồng rau củ","price":500000,"photo":"img/dat-sach-huu-co-trong-rau-cu-qua-sfarm-20l-82.jpg"},
				"sp004":{"name":"Đất sạch trồng cây kiểng","price":500000,"photo":"img/dat-sach-trong-hoa-kieng-sfarm-20l-82.jpg"},
				"sp005":{"name":"Phân trùn quế cao cấp","price":700000,"photo":"img/phan-trun-que-cao-cap-sfarm-pb01-40kg-322.jpg"},
				"sp006":{"name":"Phân trùn quế 100% Pb00","price":600000,"photo":"img/phan-trun-que-sfarm-pb00-40kg-316.jpg"},
				"sp007":{"name":"Phân trùn quế Pb02","price":650000,"photo":"img/phan-trun-que-sfarm-pb02-40kg-316.jpg"},
				"sp008":{"name":"Phân trùn quế viên nén","price":600000,"photo":"img/phan-trun-que-vien-nen-sfarm-chuyen-hoa-lan-hoa-kieng-25kg-602.jpg"},
				"sp009":{"name":"Giá thể ươm giống","price":700000,"photo":"img/gia-the-uom-giong-sfarm-17l-175.jpg"},
                "sp010":{"name":"Giá thể hoa hồng","price":1000000,"photo":"img/gia-the-trong-hoa-hong-sfarm-17l-195.jpg"},
                "sp011":{"name":"Giá thể trồng kiểng lá","price":800000,"photo":"img/gia-the-trong-kieng-la-sfarm-the-he-moi-17l-195.jpg"},
                "sp012":{"name":"Trấu hun Sfarm","price":200000,"photo":"img/trau-hun-sfarm-50l-92.jpg"},
                "sp013":{"name":"Mật rỉ đường","price":100000,"photo":"img/mat-ri-duong-sfarm-1l-36.jpg"},
                "sp014":{"name":"Mụn dừa nhà Sfarm","price":200000,"photo":"img/mun-dua-sfarm da-xu-ly chat-chat-mam-benh-50l-102.jpg"},
			   };

//them sp vao cart
function addCart(code)
{
    var name = itemList[code].name;

    if(typeof localStorage[code] === "undefined"){
        window.localStorage.setItem(code,1);
    }else{
        var current=parseInt(window.localStorage.getItem(code));
        window.localStorage.setItem(code,current+1);
    }
    alert('Đã cập nhật '+name+' vào giỏ hàng');
}
//them sp co so luong
function addCart2(code)
{
    var number = parseInt(document.getElementById(code).value);
    var name = itemList[code].name;
    if(number==0)return;
    if(typeof localStorage[code] === "undefined"){
        window.localStorage.setItem(code,number);
    }else{
        var current=parseInt(window.localStorage.getItem(code));
        if(number+current>100)
        {
            window.localStorage.setItem(code,100);
            alert('Số lượng đã vượt 100!');
            return;
        }
        else
            window.localStorage.setItem(code,number+current);
    }
    alert('Đã cập nhật '+name+' với số lượng '+number+' vào giỏ hàng');

}

//mở trang donhang.html
function openCart(){
    window.location.href = "giohang.html";
}

function showCart()
{
    var formatter = new Intl.NumberFormat('vi-VN',{
        style: 'currency',
        currency: 'VND'
    });
    var container=document.getElementById('cartDetail').getElementsByTagName('tbody')[0];
    container.innerHTML="";
    var sum=0;
    var total=0;
    for(var i=0; i<window.localStorage.length; i++)
    {
        if(typeof itemList[localStorage.key(i)] === "undefined")
            continue;
        
        var tr=document.createElement("tr");
        var photoCell=document.createElement("td");
        var nameCell=document.createElement("td");
        var numberCell=document.createElement("td");
        var sumCell=document.createElement("td");
        var removeCell=document.createElement("td");
        var removeLink=document.createElement("a");
       
        var item=itemList[localStorage.key(i)];
        var number=localStorage.getItem(localStorage.key(i));

        photoCell.innerHTML='<img src="'+item.photo+'" alt="pro" class="img-pro">';
        nameCell.innerHTML=item.name;

        numberCell.innerHTML='x'+number;

        sum=number*item.price;
        sumCell.innerHTML=formatter.format(sum);

        removeLink.innerHTML='<img src="img/logo/Flat_cross_icon.svg.png" alt="delete" class="img-del">';
        removeLink.setAttribute("href","#");
        removeLink.setAttribute("data-code",localStorage.key(i));
        //thêm hành động xóa
        removeLink.onclick=function(){
            removeCart(this.dataset.code);
        };

        removeCell.appendChild(removeLink);

        tr.appendChild(photoCell);
        tr.appendChild(nameCell);
        tr.appendChild(numberCell);
        tr.appendChild(sumCell);
        tr.appendChild(removeCell);
        
        container.appendChild(tr);
        total+=sum;
    }

    document.getElementById('pay-total').innerHTML=formatter.format(total);
}

//xóa thông tin giỏ hàng
function removeCart(code)
{
    if(typeof window.localStorage[code] !== "undefined")
    {
        //xóa sản phẩm khỏi localStorage
        window.localStorage.removeItem(code);
        //Xóa nội dung của phần thân của bảng (<tbody>)
        document.getElementById("cartDetail")
        .getElementsByTagName('tbody')[0].innerHTML="";
        //Hiển thị lại nội dung chi tiết của đơn hàng
        showCart();
    }
}

//Lọc sản phẩm
function changePro(type, element) {
    let tabs = document.getElementsByClassName('page-item');
    for (i = 0 ; i < tabs.length; i++) {
        tabs[i].style.background = '#fff';
    }

    document.getElementById('dat').style.display = 'flex';
    document.getElementById('phan').style.display = 'flex';
    document.getElementById('gia').style.display = 'flex';
    document.getElementById('spk').style.display = 'flex';

    switch (type){
        case 'tatca': break;
        case 'dat':
            document.getElementById('phan').style.display = 'none';
            document.getElementById('gia').style.display = 'none';
            document.getElementById('spk').style.display = 'none';
            break;
        case 'phan':
            document.getElementById('dat').style.display = 'none';
            document.getElementById('gia').style.display = 'none';
            document.getElementById('spk').style.display = 'none';
            break;
        case 'gia':
            document.getElementById('phan').style.display = 'none';
            document.getElementById('dat').style.display = 'none';
            document.getElementById('spk').style.display = 'none';
            break;
        case 'spk':
            document.getElementById('phan').style.display = 'none';
            document.getElementById('gia').style.display = 'none';
            document.getElementById('dat').style.display = 'none';
            break;
    }

    element.style.background = '#67b1b3';
}

function frmValidate(){
    var frm = document.forms['regfr'];
    var soluong = frm.sl;
    //số lượng là số dương
    var t2 = parseInt(soluong.value);
    if(isNaN(t2) || t2 < 0){
        alert("Hãy nhập số lượng là số dương!");
        soluong.focus();
        return false;
    }


    alert("Thêm thành công!");
    return true;
}


