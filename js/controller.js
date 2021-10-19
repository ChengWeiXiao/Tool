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

    var winNo2 = [{
        lotteryDate: '2021/10/19 (二)',
        name: '國旅券',
        number: ['87', '04', '40', '29', '71']
    }, {
        lotteryDate: '2021/10/19 (二)',
        name: 'i原券',
        number: ['12', '59']
    }];

    var winNo3 = [];

    var winNo4 = [];

    function search() {
        initial();
        var identityNumber = document.getElementById("identityNumber").value;
        if (identityNumber == null || identityNumber == undefined || identityNumber == '') {
            document.getElementById('invalid').style.display = 'block';
            return;
        }

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

        if (winNo1.length > 0) {
            identityNumber.split(',').filter(onlyUnique).forEach(id => {
                week1Count = 0;
                winNo1.forEach(element => {
                    if (element.number.find(element => element == id.slice(-(element.length)))) {
                        let span = document.createElement('span');
                        span.style.fontWeight = 'bold';

                        if (document.getElementById('week1Number' + id) == null) {
                            let numberSpan = document.createElement('span');
                            numberSpan.style.fontWeight = 'bold';
                            numberSpan.id = 'week1Number' + id;
                            numberSpan.appendChild(document.createTextNode('輸入號碼:' + id));
                            week1Result.appendChild(numberSpan);
                        }

                        span.appendChild(document.createTextNode('中獎券別:' + element.name + element.lotteryDate));
                        week1Result.appendChild(document.createElement('br'));
                        week1Result.appendChild(span);
                        week1Count++;
                    }
                });
                if (week1Count == 0) {
                    if (document.getElementById('week1Number' + id) == null) {
                        let numberSpan = document.createElement('span');
                        numberSpan.style.fontWeight = 'bold';
                        numberSpan.id = 'week1Number' + id;
                        numberSpan.appendChild(document.createTextNode('輸入號碼:' + id));
                        week1Result.appendChild(numberSpan);
                    }
                    let winning = document.createElement('h4');
                    winning.textContent = '下週還有機會!';
                    winning.style.color = '#f0643a';
                    winning.style.fontWeight = 'bold';
                    week1Result.appendChild(winning);
                } else {
                    let noWinning = document.createElement('h4');
                    noWinning.textContent = '恭喜你中獎了!';
                    noWinning.style.color = '#04a776';
                    noWinning.style.fontWeight = 'bold';
                    week1Result.appendChild(noWinning);
                }
                week1Result.appendChild(document.createElement('hr'));
            });
        }

        if (winNo2.length > 0) {
            identityNumber.split(',').filter(onlyUnique).forEach(id => {
                week2Count = 0;
                winNo2.forEach(element => {
                    if (element.number.find(element => element == id.slice(-(element.length)))) {
                        let span = document.createElement('span');
                        span.style.fontWeight = 'bold';

                        if (document.getElementById('week2Number' + id) == null) {
                            let numberSpan = document.createElement('span');
                            numberSpan.style.fontWeight = 'bold';
                            numberSpan.id = 'week2Number' + id;
                            numberSpan.appendChild(document.createTextNode('輸入號碼:' + id));
                            week2Result.appendChild(numberSpan);
                        }

                        span.appendChild(document.createTextNode('中獎券別:' + element.name + element.lotteryDate));
                        week2Result.appendChild(document.createElement('br'));
                        week2Result.appendChild(span);
                        week2Count++;
                    }
                });
                if (week2Count == 0) {
                    if (document.getElementById('week2Number' + id) == null) {
                        let numberSpan = document.createElement('span');
                        numberSpan.style.fontWeight = 'bold';
                        numberSpan.id = 'week2Number' + id;
                        numberSpan.appendChild(document.createTextNode('輸入號碼:' + id));
                        week2Result.appendChild(numberSpan);
                    }
                    let winning = document.createElement('h4');
                    winning.textContent = '下週還有機會!';
                    winning.style.color = '#f0643a';
                    winning.style.fontWeight = 'bold';
                    week2Result.appendChild(winning);
                } else {
                    let noWinning = document.createElement('h4');
                    noWinning.textContent = '恭喜你中獎了!';
                    noWinning.style.color = '#04a776';
                    noWinning.style.fontWeight = 'bold';
                    week2Result.appendChild(noWinning);
                }
                week2Result.appendChild(document.createElement('hr'));
            });
        }

        if (winNo3.length > 0) {
            identityNumber.split(',').filter(onlyUnique).forEach(id => {
                week3Count = 0;
                winNo3.forEach(element => {
                    if (element.number.find(element => element == id.slice(-(element.length)))) {
                        let span = document.createElement('span');
                        span.style.fontWeight = 'bold';

                        if (document.getElementById('week3Number' + id) == null) {
                            let numberSpan = document.createElement('span');
                            numberSpan.style.fontWeight = 'bold';
                            numberSpan.id = 'week3Number' + id;
                            numberSpan.appendChild(document.createTextNode('輸入號碼:' + id));
                            week3Result.appendChild(numberSpan);
                        }

                        span.appendChild(document.createTextNode('中獎券別:' + element.name + element.lotteryDate));
                        week3Result.appendChild(document.createElement('br'));
                        week3Result.appendChild(span);
                        week3Count++;
                    }
                });
                if (week3Count == 0) {
                    if (document.getElementById('week3Number' + id) == null) {
                        let numberSpan = document.createElement('span');
                        numberSpan.style.fontWeight = 'bold';
                        numberSpan.id = 'week3Number' + id;
                        numberSpan.appendChild(document.createTextNode('輸入號碼:' + id));
                        week3Result.appendChild(numberSpan);
                    }
                    let winning = document.createElement('h4');
                    winning.textContent = '下週還有機會!';
                    winning.style.color = '#f0643a';
                    winning.style.fontWeight = 'bold';
                    week3Result.appendChild(winning);
                } else {
                    let noWinning = document.createElement('h4');
                    noWinning.textContent = '恭喜你中獎了!';
                    noWinning.style.color = '#04a776';
                    noWinning.style.fontWeight = 'bold';
                    week3Result.appendChild(noWinning);
                }
                week3Result.appendChild(document.createElement('hr'));
            });
        }

        if (winNo4.length > 0) {
            identityNumber.split(',').filter(onlyUnique).forEach(id => {
                week4Count = 0;
                winNo4.forEach(element => {
                    if (element.number.find(element => element == id.slice(-(element.length)))) {
                        let span = document.createElement('span');
                        span.style.fontWeight = 'bold';

                        if (document.getElementById('week4Number' + id) == null) {
                            let numberSpan = document.createElement('span');
                            numberSpan.style.fontWeight = 'bold';
                            numberSpan.id = 'week4Number' + id;
                            numberSpan.appendChild(document.createTextNode('輸入號碼:' + id));
                            week4Result.appendChild(numberSpan);
                        }

                        span.appendChild(document.createTextNode('中獎券別:' + element.name + element.lotteryDate));
                        week4Result.appendChild(document.createElement('br'));
                        week4Result.appendChild(span);
                        week4Count++;
                    }
                });
                if (week4Count == 0) {
                    if (document.getElementById('week4Number' + id) == null) {
                        let numberSpan = document.createElement('span');
                        numberSpan.style.fontWeight = 'bold';
                        numberSpan.id = 'week4Number' + id;
                        numberSpan.appendChild(document.createTextNode('輸入號碼:' + id));
                        week4Result.appendChild(numberSpan);
                    }
                    let winning = document.createElement('h4');
                    winning.textContent = '下週還有機會!';
                    winning.style.color = '#f0643a';
                    winning.style.fontWeight = 'bold';
                    week4Result.appendChild(winning);
                } else {
                    let noWinning = document.createElement('h4');
                    noWinning.textContent = '恭喜你中獎了!';
                    noWinning.style.color = '#04a776';
                    noWinning.style.fontWeight = 'bold';
                    week4Result.appendChild(noWinning);
                }
                week4Result.appendChild(document.createElement('hr'));
            });
        }
        document.getElementById("week1").style.display = 'block';
        document.getElementById("week2").style.display = 'block';
        document.getElementById("week3").style.display = 'block';
        document.getElementById("week4").style.display = 'block';
        if (winNo1.length == 0) {
            document.getElementById("week1NotYet").style.display = 'block';
        }
        if (winNo2.length == 0) {
            document.getElementById("week2NotYet").style.display = 'block';
        }
        if (winNo3.length == 0) {
            document.getElementById("week3NotYet").style.display = 'block';
        }
        if (winNo4.length == 0) {
            document.getElementById("week4NotYet").style.display = 'block';
        }
    }

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    function removeValue() {
        document.getElementById("identityNumber").value = '';
        initial();
    }

    function initial() {
        let week1Result = document.getElementById('week1Result');
        let week2Result = document.getElementById('week2Result');
        let week3Result = document.getElementById('week3Result');
        let week4Result = document.getElementById('week4Result');

        document.getElementById("week1NotYet").style.display = 'none';
        document.getElementById("week2NotYet").style.display = 'none';
        document.getElementById("week3NotYet").style.display = 'none';
        document.getElementById("week4NotYet").style.display = 'none';
        document.getElementById('invalid').style.display = 'none';
        document.getElementById("week1").style.display = 'none';
        document.getElementById("week2").style.display = 'none';
        document.getElementById("week3").style.display = 'none';
        document.getElementById("week4").style.display = 'none';

        week1Result.innerHTML = '';
        week2Result.innerHTML = '';
        week3Result.innerHTML = '';
        week4Result.innerHTML = '';
    }

    function clearInvalid() {
        document.getElementById('invalid').style.display = 'none';
    }
