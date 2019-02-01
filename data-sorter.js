/**
 * @author Arsenio Cantuangco Jr.
 * @version 1.0
 */

let dataSorter = function( data, options ) {

    let sortedData = [];

    if (typeof data === 'undefined') {
        console.log('Data input is required.');
        return;
    }

    if (typeof options === 'undefined') {
        console.log('Option input is required.');
        return;
    }

    if ( typeof options.rank === 'undefined' ) {
        options.rank = false;
    }

    if ( typeof options.sort === 'undefined' ) {
        options.sort = 'desc';
    }

    // sort data
    data.sort(function (a, b) {
        if ( options.sort === 'asc' ) {
            return  a[ options.keyValue ] - b[ options.keyValue ];
        } else {
            return  b[ options.keyValue ] - a[ options.keyValue ];
        }
    });

    // add rank
    if ( options.rank === true ) {
        let rank = 1,
            dataLength = data.length,
            dataLastIdx = dataLength - 1,
            sameRank = 0;

        data.forEach(function(item, idx){
            if ( idx === dataLastIdx ) {
                item.rank = rank;
            } else {
                if ( item[ options.keyValue ] !== data[ idx + 1 ][ options.keyValue ] ) {
                    item.rank = rank;
                    if ( sameRank > 0 ) {
                        rank += sameRank;
                        sameRank = 0;
                    }
                    rank++;
                } else {
                    item.rank = rank;
                    sameRank++;
                }
            }
            sortedData.push(item);
        });
    }

    return sortedData;
};
