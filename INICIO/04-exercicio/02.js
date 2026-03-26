/**
 *  Nome: largura x altura
 *  8k 7680 x 4320
 *  4k 3840 x 2160
 *  WQHD 2560 x 1440 
 *  FHD 1920 x 720 
 *  HD 1280 x 720
 */


function nomeResolucao (largura, altura) {
    if (largura > 7680 && altura > 4320) {
        return '8K';
    } else if (largura >= 3840 && altura >= 2160) {
        return '4K';
    } else if (largura >= 2560 && altura >= 1440) {
        return 'WQHD';
    } else if (largura >= 1920 && altura >= 720) {
        return 'FHD';
    } else if (largura >= 1280 && altura >= 720) {
        return 'HD';
    } else {
        return 'FALSO';
    }
}


let nome = nomeResolucao(1366, 768)
console.log(nome);