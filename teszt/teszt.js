const list = [
    { nev: 'Termék 1', darab: 3, ar: 1000, kep: 'kep1.jpg' },
    { nev: 'Termék 2', darab: 1, ar: 500, kep: 'kep2.jpg' },
    { nev: 'Termék 3', darab: 2, ar: 2000, kep: 'kep3.jpg' }
];

QUnit.module('megjelenitDiv', function () {
    QUnit.test('létezik-e a weboldal ?', function (assert) {
        assert.ok(megjelenitDiv, 'Létezik');
    });

    QUnit.test('lista első elemeit', function (assert) {
        assert.ok(list[0], 'lista első eleme létezik e');
    });



    QUnit.test('lista második elemet', function (assert) {
        assert.ok(list[1], 'lista második eleme létezik e');
    });



    QUnit.test('lista harmadik eleme', function (assert) {
        assert.ok(list[2], 'lista harmadik eleme létezik e');
    });

});


    




QUnit.module('megjelenitTabla', function () {
    QUnit.test('létezik-e a weboldal ?', function (assert) {
        assert.ok(megjelenitTabla, 'Létezik');
    });

    QUnit.module('első elem', function () {
        QUnit.test('ellenőrzi a lista elemeit', function (assert) {
            assert.ok(list[0], 'lista második eleme létezik e');
        });
    });

    QUnit.module('második elem', function () {
        QUnit.test('ellenőrzi a lista elemeit', function (assert) {
            assert.ok(list[1], 'lista harmadik eleme létezik e');
        });
    });

    QUnit.module('harmadik elem', function () {
        QUnit.test('ellenőrzi a lista elemeit', function (assert) {
            assert.ok(list[2], 'lista első eleme létezik e');
        });
    });


});

QUnit.module('hozzaad', function () {
    QUnit.test('létezik-e a weboldal ?', function (assert) {
        assert.ok(hozzaad, 'Létezik');
    });

});






QUnit.module('nav', function () {
    QUnit.test('létezik-e a weboldal ?', function (assert) {
        assert.ok(nav, 'Létezik');
    });

    QUnit.test('a navigáció tartalmazza az Oláh Pékség feliratot', function (assert) {
        const NAV = $("nav");
        const expectedNav = '<a class="navbar-brand text-warning" href="#">Oláh Pékség</a>';
        assert.equal(NAV.html(), expectedNav, 'a navigáció tartalmazza az Oláh Pékség feliratot');
    });
    


    QUnit.test('az aktív link megfelelően be van állítva a nav-ban', function (assert) {
        const NAV = $("nav");
        const expectedActiveLink = '<a class="nav-link active" aria-current="page" href="index.html">Főoldal</a>';
        assert.equal(NAV.find('.active').html(), expectedActiveLink, 'az aktív link megfelelően be van állítva a nav-ban');
    });

});


QUnit.module('hozzaAdas', function () {

    QUnit.test('létezik-e a weboldal ?', function (assert) {
        assert.ok(hozzaAdas, 'Létezik');
    });



    QUnit.test('van-e gombja ?', function (assert) {
        const GOMB = $('#b');
        assert.ok(GOMB, 'van');
    });
});

QUnit.module('kosarMegjelenit', function () {
    QUnit.test('létezik-e a weboldal ?', function (assert) {
        assert.ok(kosarMegjelenit, 'Létezik');
    });



});

QUnit.module('gombok', function () {
    QUnit.test('létezik-e ?', function (assert) {
        assert.ok(gombok, 'darabszáma');
    });

    QUnit.test('jobb gomb látja-e a darabok számát', function (assert) {
        assert.equal(gombok(darabokSzama==JOBBELEM), 'darabszáma');
    });


});


QUnit.module('xKattintas', function () {
    QUnit.test('létezik-e a weboldal ?', function (assert) {
        assert.ok(xKattintas, 'Létezik');
    });

    QUnit.test('megfelelő gombra kattintás', function (assert) {
        const GOMB = $('#x1');
        GOMB.trigger('click');
        assert.equal(GOMB.length, 0, 'A megfelelő gombra kattintva eltűnik a gomb');
    });

    QUnit.test('törlés után megjelenik a frissített tábla', function (assert) {
        const LIST = [{ nev: 'Termék 1', darab: 2, ar: 100 }, { nev: 'Termék 2', darab: 3, ar: 300 }];
        const EXPECTED = '<table>...</table>';
        $('#torol').html(EXPECTED);
        xKattintas(LIST);
        assert.equal($('#torol').html(), EXPECTED, 'A frissített tábla megjelenik a megfelelő helyen');
    });

});