let okCount = 0;

for (let i = 1; i <= 100; i++) {
    let response = '';

    switch (true) {
        case i % 3 === 0 && i % 5 === 0:
            response = 'ok';
            okCount++;
            break;
            
        case i % 3 === 0:
            response = '3x';
            break;

        case i % 5 === 0:
            response = '5x';
            break;

        default:
            response = i;
    }
    
    console.log(response);
}

console.log('Total of "ok":', okCount);