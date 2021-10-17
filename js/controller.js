    var winNo1 = [{
        lotteryDate: '2021/10/12 (二)',
        name: '國旅券',
        number: ['21', '32', '98', '67', '97', '410']
    }, {
        lotteryDate: '2021/10/12 (二)',
        name: 'i原券',
        number: ['64', '85']
    }, {
        lotteryDate: '2021/10/13 (三)',
        name: '農遊券',
        number: ['89', '32', '54', '597', '453', '152']
    }, {
        lotteryDate: '2021/10/13 (三)',
        name: '藝FUN券(數位)',
        number: ['96', '15', '07', '30', '73', '98', '19', '11']
    }, {
        lotteryDate: '2021/10/13 (三)',
        name: '藝FUN券(紙本)',
        number: ['39', '37', '23', '36', '79', '08', '14', '75']
    }, {
        lotteryDate: '2021/10/14 (四)',
        name: '動滋券',
        number: ['97', '13', '19', '55', '71', '93', '381', '734', '644', '453', '985']
    }, {
        lotteryDate: '2021/10/14 (四)',
        name: '客庄券',
        number: ['81', '900']
    }, {
        lotteryDate: '2021/10/15 (五)',
        name: '地方創生券',
        number: ['081', '105', '594', '188', '089', '396', '521', '467', '912', '798', '358', '441', '367',
            '941', '335'
        ]
    }];

    var winNo2 = [];

    var winNo3 = [];

    var winNo4 = [];

    function search() {
        initial();
        var identityNumber = document.getElementById("identityNumber").value;
        if (identityNumber == null || identityNumber == undefined || identityNumber == '') {
            swal({
                title: "提醒",
                text: "請填入身分證末三碼",
                icon: "warning",
                button: "關閉",
            });
            return;
        }
        localStorage.setItem('identityNumber', identityNumber.toString())
        var week1Count = 0;
        var week2Count = 0;
        var week3Count = 0;
        var week4Count = 0;

        let week1Result = document.getElementById('week1Result');
        let week2Result = document.getElementById('week2Result');
        let week3Result = document.getElementById('week3Result');
        let week4Result = document.getElementById('week4Result');

        week1Result.innerHTML = '';
        week2Result.innerHTML = '';
        week3Result.innerHTML = '';
        week4Result.innerHTML = '';

        if(winNo1.length>0){
            identityNumber.split(',').filter(onlyUnique).forEach(id => {
                winNo1.forEach(element => {
                    if (element.number.find(element => element == id.slice(-(element.length)))) {
                        let span = document.createElement('span');
                        span.style.fontWeight='bold';

                        if(document.getElementById('week1Number'+id)==null){
                            let numberSpan = document.createElement('span');
                            numberSpan.style.fontWeight='bold';
                            numberSpan.id='week1Number'+id;
                            numberSpan.appendChild(document.createTextNode('輸入號碼:' + id));
                            week1Result.appendChild(numberSpan);
                        }
                        
                        span.appendChild(document.createTextNode('中獎券別:' + element.name + element.lotteryDate));
                        week1Result.appendChild(document.createElement('br'));
                        week1Result.appendChild(span);
                        week1Count++;
                    }
                });
                week1Result.appendChild(document.createElement('hr'));
            });
        }

        if(winNo2.length>0){
            identityNumber.split(',').filter(onlyUnique).forEach(id => {
                winNo2.forEach(element => {
                    if (element.number.find(element => element == id.slice(-(element.length)))) {
                        let span = document.createElement('span');
                        span.style.fontWeight='bold';

                        if(document.getElementById('week2Number'+id)==null){
                            let numberSpan = document.createElement('span');
                            numberSpan.style.fontWeight='bold';
                            numberSpan.id='week2Number'+id;
                            numberSpan.appendChild(document.createTextNode('輸入號碼:' + id));
                            week2Result.appendChild(numberSpan);
                        }
                        
                        span.appendChild(document.createTextNode('中獎券別:' + element.name + element.lotteryDate));
                        week2Result.appendChild(document.createElement('br'));
                        week2Result.appendChild(span);
                        week2Count++;
                    }
                });
                week2Result.appendChild(document.createElement('hr'));
            });
        }

        if(winNo3.length>0){
            identityNumber.split(',').filter(onlyUnique).forEach(id => {
                winNo3.forEach(element => {
                    if (element.number.find(element => element == id.slice(-(element.length)))) {
                        let span = document.createElement('span');
                        span.style.fontWeight='bold';

                        if(document.getElementById('week3Number'+id)==null){
                            let numberSpan = document.createElement('span');
                            numberSpan.style.fontWeight='bold';
                            numberSpan.id='week3Number'+id;
                            numberSpan.appendChild(document.createTextNode('輸入號碼:' + id));
                            week3Result.appendChild(numberSpan);
                        }
                        
                        span.appendChild(document.createTextNode('中獎券別:' + element.name + element.lotteryDate));
                        week3Result.appendChild(document.createElement('br'));
                        week3Result.appendChild(span);
                        week3Count++;
                    }
                });
                week3Result.appendChild(document.createElement('hr'));
            });
        }
        
        if(winNo4.length>0){
            identityNumber.split(',').filter(onlyUnique).forEach(id => {
                winNo4.forEach(element => {
                    if (element.number.find(element => element == id.slice(-(element.length)))) {
                        let span = document.createElement('span');
                        span.style.fontWeight='bold';

                        if(document.getElementById('week4Number'+id)==null){
                            let numberSpan = document.createElement('span');
                            numberSpan.style.fontWeight='bold';
                            numberSpan.id='week4Number'+id;
                            numberSpan.appendChild(document.createTextNode('輸入號碼:' + id));
                            week4Result.appendChild(numberSpan);
                        }
                        
                        span.appendChild(document.createTextNode('中獎券別:' + element.name + element.lotteryDate));
                        week4Result.appendChild(document.createElement('br'));
                        week4Result.appendChild(span);
                        week4Count++;
                    }
                });
                week4Result.appendChild(document.createElement('hr'));
            });
        }
        
        if(week1Count>0){
            document.getElementById("week1").style.display = 'block';
        }
        if(week2Count>0){
            document.getElementById("week2").style.display = 'block';
        }
        if(week3Count>0){
            document.getElementById("week3").style.display = 'block';
        }
        if(week4Count>0){
            document.getElementById("week4").style.display = 'block';
        }
        if (week1Count+week2Count+week3Count+week4Count > 0) {
            document.getElementById("winning").style.display = 'block';

        } else {
            document.getElementById("noWinning").style.display = 'block';

        }
    }

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    function removeValue() {
        document.getElementById("identityNumber").value = '';
        document.getElementById("week1").style.display = 'none';
        document.getElementById("week2").style.display = 'none';
        document.getElementById("week3").style.display = 'none';
        document.getElementById("week4").style.display = 'none';
        initial();
    }

    function initial() {
        document.getElementById("winning").style.display = 'none';
        document.getElementById("noWinning").style.display = 'none';

        let week1Result = document.getElementById('week1Result');
        let week2Result = document.getElementById('week2Result');
        let week3Result = document.getElementById('week3Result');
        let week4Result = document.getElementById('week4Result');

        week1Result.innerHTML = '';
        week2Result.innerHTML = '';
        week3Result.innerHTML = '';
        week4Result.innerHTML = '';
    }
    let identityNumber=null; 
    function loadUid() {
        identityNumber = document.getElementById('identityNumber')
        identityNumber.value = localStorage.getItem('identityNumber')
      }
