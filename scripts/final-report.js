function convertTemperatureRange(startValue,endValue,scale){
    startValue = Number(document.getElementById("lowTemp").value);
    endValue = Number(document.getElementById("highTemp").value);
    scale = document.querySelector("input[name=scale]:checked").value;
    if(scale == "Farenheit"){
        let fTemp = startValue;
        document.getElementById("results").innerHTML=`
            <table id="conversion">
                <theader>
                    <tr>
                        <th scope="col">°F</th>
                        <th scope="col">°C</th>
                    </tr>
                </theader>
                <tbody id="data">
                </tbody>
            </table>`;
        for( i=startValue; i <= endValue; i++){
            let cTemp = (fTemp - 32) * 5 / 9;
            document.getElementById("data").innerHTML+=`
                <tr>
                    <td>${Math.round(fTemp)}</td>
                    <td>${Math.round(cTemp)}</td>
                </tr>
            `;
            fTemp ++;
        }
    }else{
        let cTemp = startValue;
        document.getElementById("results").innerHTML=`
            <table id="conversion">
                <theader>
                    <tr>
                        <th scope="col">°C</th>
                        <th scope="col">°F</th>
                    </tr>
                </theader>
                <tbody id="data">
                </tbody>
            </table>`;
        for( i=startValue; i <= endValue; i++){
            let fTemp = cTemp * 9 / 5 + 32;
            document.getElementById("data").innerHTML+=`
                <tr>
                    <td>${Math.round(cTemp)}</td>
                    <td>${Math.round(fTemp)}</td>
                </tr>
            `;
            cTemp ++;
        }
    }
}