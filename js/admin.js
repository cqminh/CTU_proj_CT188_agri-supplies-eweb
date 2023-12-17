        var btn = document.getElementById('btn');
        var masp = document.getElementById('masp');
        var tensp = document.getElementById('tensp');
        var loaisp = document.getElementById('loaisp');
        var sl = document.getElementById('sl');
        var dg = document.getElementById('dg');
        var ha = document.getElementById('ha');
        //lấy tên file: Sử dụng lastIndexOf để lấy \ Cuối cùng làm chỉ mục 
        function getFile(filePath) {
            
            /*Chỉ lấy tên
            return filePath.substr(filePath.lastIndexOf('\\') + 1).split('.')[0];
            */
            //lấy tên và phần mở rộng
            return filePath.substr(filePath.lastIndexOf('\\') + 1);
        }
        
        var list = document.getElementById('list');
        
        btn.onclick = function () {
            var tr = document.createElement('tr');
            var id = document.createAttribute("id");
            id.value = masp.value;
            tr.setAttributeNode(id)
            list.appendChild(tr);
            var tr1 = document.getElementById(id.value);
            alert(getFile(ha.value));
            function add(sp, tr){
                var td = document.createElement('td');
                td.textContent = sp.value;
                tr.appendChild(td);
                sp.value = null;
            }
    
            //thêm hình ảnh
            function addimg(sp, tr){
                var src = getFile(sp.value)
                var td = document.createElement('td');
                //td.innerHTML = "<img width='50' src = '"+ src +"' >";
                td.innerHTML = "<img width='50' src = 'img/"+ src +"' >";
                tr.appendChild(td);
                sp.value = null;
            }
    
            add(masp, tr1);
            add(tensp, tr1);
            add(loaisp, tr1);
            add(sl, tr1);
            add(dg, tr1);
            addimg(ha, tr1);
        
        
        }

function changePage(type) {
    document.getElementById(type).style.display = 'block';
    switch (type) {
        case 'add':
            document.getElementById('edit').style.display = 'none';
            break;
        case 'edit':
            document.getElementById('add').style.display = 'none';
            break;
    }
}