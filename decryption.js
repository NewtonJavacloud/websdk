const _0x5dd5d4=_0xc95b;function _0x33b8(){const _0x3e6d00=['change','getElementById','563249ycoRhw','2977408oxpxks','value','log','match','1542QBUdBT','AES-GCM','input[name=\x22environment\x22]','decode','4ZHDdbx','Error\x20decrypting\x20token:','encrypt','addEventListener','map','85482KaArYG','subtle','431628htGBYh','15673CPSBMc','80viAVYy','encode','forEach','decrypt','querySelectorAll','Decrypted\x20Token:','7a3cf755364b41bd5b582810a60268a7','12692oIYPXt','9526858YqofTe','100TlfZwv','raw','importKey'];_0x33b8=function(){return _0x3e6d00;};return _0x33b8();}(function(_0x3dff1c,_0x45b581){const _0x5513b6=_0xc95b,_0x15951b=_0x3dff1c();while(!![]){try{const _0x2ea192=parseInt(_0x5513b6(0x132))/0x1+-parseInt(_0x5513b6(0x13b))/0x2*(-parseInt(_0x5513b6(0x122))/0x3)+parseInt(_0x5513b6(0x12b))/0x4*(parseInt(_0x5513b6(0x12d))/0x5)+parseInt(_0x5513b6(0x137))/0x6*(parseInt(_0x5513b6(0x123))/0x7)+-parseInt(_0x5513b6(0x133))/0x8+parseInt(_0x5513b6(0x140))/0x9*(parseInt(_0x5513b6(0x124))/0xa)+-parseInt(_0x5513b6(0x12c))/0xb;if(_0x2ea192===_0x45b581)break;else _0x15951b['push'](_0x15951b['shift']());}catch(_0x28604f){_0x15951b['push'](_0x15951b['shift']());}}}(_0x33b8,0x4ffbe));function _0xc95b(_0x36c882,_0x24a4a3){const _0x33b864=_0x33b8();return _0xc95b=function(_0xc95b04,_0x1f5c4a){_0xc95b04=_0xc95b04-0x121;let _0x3d268c=_0x33b864[_0xc95b04];return _0x3d268c;},_0xc95b(_0x36c882,_0x24a4a3);}const secretKey=_0x5dd5d4(0x12a);async function getCryptoKey(_0x46aadc){const _0x2f5ce4=_0x5dd5d4,_0x32fb21=new TextEncoder(),_0x200eca=_0x32fb21[_0x2f5ce4(0x125)](_0x46aadc);return await crypto[_0x2f5ce4(0x121)][_0x2f5ce4(0x12f)](_0x2f5ce4(0x12e),_0x200eca,{'name':_0x2f5ce4(0x138)},![],[_0x2f5ce4(0x13d),_0x2f5ce4(0x127)]);}async function decryptData(_0x5cebad,_0xc60944,_0x1f6078){const _0x587f38=_0x5dd5d4,_0x13ce96=await getCryptoKey(_0x1f6078),_0x232375=new Uint8Array(_0xc60944['match'](/.{1,2}/g)[_0x587f38(0x13f)](_0x14421e=>parseInt(_0x14421e,0x10))),_0x5b26ae=new Uint8Array(_0x5cebad[_0x587f38(0x136)](/.{1,2}/g)[_0x587f38(0x13f)](_0xf9562a=>parseInt(_0xf9562a,0x10))),_0x354f7c=await crypto[_0x587f38(0x121)][_0x587f38(0x127)]({'name':_0x587f38(0x138),'iv':_0x232375},_0x13ce96,_0x5b26ae),_0x722ea6=new TextDecoder();return _0x722ea6[_0x587f38(0x13a)](_0x354f7c);}async function fetchAndDecryptToken(){const _0x3b259c=_0x5dd5d4,_0x1f4faf=document[_0x3b259c(0x131)]('encrypted-data')[_0x3b259c(0x134)],_0x3006fb=document[_0x3b259c(0x131)]('iv')[_0x3b259c(0x134)];try{const _0x3d9682=await decryptData(_0x1f4faf,_0x3006fb,secretKey);console[_0x3b259c(0x135)](_0x3b259c(0x129),_0x3d9682),document[_0x3b259c(0x131)]('token')[_0x3b259c(0x134)]=_0x3d9682;}catch(_0x4e9f5c){console['error'](_0x3b259c(0x13c),_0x4e9f5c['message']);}}document[_0x5dd5d4(0x128)](_0x5dd5d4(0x139))[_0x5dd5d4(0x126)](_0x5ac3f8=>{const _0x29f2b6=_0x5dd5d4;_0x5ac3f8[_0x29f2b6(0x13e)](_0x29f2b6(0x130),fetchAndDecryptToken);});