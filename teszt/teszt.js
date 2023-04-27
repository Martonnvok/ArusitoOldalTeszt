const lista = [
    { nev: 'Termék 1', darab: 3, ar: 1000, kep: 'kep1.jpg' },
    { nev: 'Termék 2', darab: 1, ar: 500, kep: 'kep2.jpg' },
    { nev: 'Termék 3', darab: 2, ar: 2000, kep: 'kep3.jpg' }
];

QUnit.module('megjelenitDiv', function () {
    QUnit.test('létezik-e a weboldal ?', function (assert) {
        assert.ok(megjelenitDiv, 'Létezik');
    });

    QUnit.module('első elem', function () {
        QUnit.test('ellenőrzi a lista elemeit', function (assert) {
            assert.equal(lista[0], 'lista második eleme létezik e');
        });
    });

    QUnit.module('második elem', function () {
        QUnit.test('ellenőrzi a lista elemeit', function (assert) {
            assert.equal(lista[1], 'lista harmadik eleme létezik e');
        });
    });

    QUnit.module('harmadik elem', function () {
        QUnit.test('ellenőrzi a lista elemeit', function (assert) {
            assert.equal(lista[2], 'lista első eleme létezik e');
        });
    });

});






QUnit.module('megjelenitTabla', function () {
    QUnit.test('létezik-e a weboldal ?', function (assert) {
        assert.ok(megjelenitTabla, 'Létezik');
    });

    QUnit.module('első elem', function () {
        QUnit.test('ellenőrzi a lista elemeit', function (assert) {
            assert.equal(lista[0], 'lista második eleme létezik e');
        });
    });

    QUnit.module('második elem', function () {
        QUnit.test('ellenőrzi a lista elemeit', function (assert) {
            assert.equal(lista[1], 'lista harmadik eleme létezik e');
        });
    });

    QUnit.module('harmadik elem', function () {
        QUnit.test('ellenőrzi a lista elemeit', function (assert) {
            assert.equal(lista[2], 'lista első eleme létezik e');
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

    QUnit.test('a header tartalmazza az Oláh Pékség feliratot', function (assert) {
        const HEADER = $("header");
        const expectedHeader = '<h1 class="text-warning">Oláh Pékség</h1>';
        assert.equal(HEADER.html(), expectedHeader, 'a header tartalmazza az Oláh Pékség feliratot');
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
        assert.ok(GOMB.length, 'van');
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
        assert.equal(darabokSzama, 'darabszáma');
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