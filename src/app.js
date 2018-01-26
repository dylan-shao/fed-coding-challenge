// if people run it in local without server, then we use the data below 
// which is copied from code-test.json
var data = [{
        "name": "Big Guy Financial",
        "apy": 0.75,
        "earnings": 376.41
    },
    {
        "name": "Dewey, Cheatam & Howe",
        "apy": 0.01,
        "earnings": 5.00
    },
    {
        "name": "URBank",
        "apy": 0.87,
        "earnings": 436.89
    },
    {
        "name": "First Onion",
        "apy": 0.01,
        "earnings": 5.00
    },
    {
        "name": "Bank of Everywhere",
        "apy": 0.01,
        "earnings": 5.00
    }
];

function creataTableFromData(data) {
    var table = $('<table></table>');
    var tr = $('<tr></tr>');
    tr.append('<th></th>');
    tr.append('<th>Annual Percentage Yield</th>');
    tr.append('<th>Est. Earnings for 1 Year*</th>');
    table.append(tr);
    data.sort(function(a,b){
      return b.earnings - a.earnings;
    }).forEach(function(item) {
        var tr = $('<tr></tr>');
        tr.append('<td>' + item.name + '</td>');
        tr.append('<td>' + item.apy + '%' + '</td>');
        tr.append('<td>' + '$' + item.earnings.toFixed(2) + '</td>');
        table.append(tr);
    });

    $('#table').append(table);
}

$(document).ready(function() {
    // if people run the page with a server then we can just load code-test.json
    if (window.location.href.slice(0, 4) === 'http') {
        $.getJSON('code-test.json', function(response) {
            data = response;
            creataTableFromData(data);
        });
    } else {
        creataTableFromData(data);
    }


    $('.btn-close').click(function(e) {
        e.preventDefault();
        $('#body').toggleClass('dialogIsOpen');
        $('#modal').fadeOut('fast');
    });


    $('#login').click(function(e) {
        e.preventDefault();
        $('#body').toggleClass('dialogIsOpen');
        $('#modal').fadeIn('fast');
    });

    $('#archiveBtb').click(function(e) {
        e.preventDefault();
        $('.tab-news').removeClass('active');
        $('.news').hide();
        $('.tab-archive').addClass('active');
        $('.archive').show();
    });
    $('#newsBtn').click(function(e) {
        e.preventDefault();
        $('.tab-news').addClass('active');
        $('.news').show();
        $('.tab-archive').removeClass('active');
        $('.archive').hide();
    });

});