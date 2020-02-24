let html= '';
for(i=1;i<10;i++){
    html= html + '<tr>';
    for(j=2;j<10;j++){
        html= html + '<td>'+ j+ "x" + i + ' = ' + i*j + "</td>";
    }
    html= html + '</tr>';
}
document.getElementById('demo').innerHTML=html;