import React, {useState} from 'react';

const Kod = () => {
    const [status, setStatus] = useState(undefined);
    const [heartCount, setHeartCount] = useState(2);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    const createImages = () => {
        return shuffleArray(["cat.png", "dog1.png", "dog2.png"]).map((img) => {
            return {
                img: `./assets/${img}`,
                show: false
            }
        })
    }

    const [images, setImages] = useState(createImages())

    const onClick = (index) => {
        let image = images[index];
        if (image.show)
            return;

        image.show = true;
        setImages([...images]);

        if (image.img.includes("cat") && heartCount > 0) {
            setStatus('WON');
            showAll();
        } else {
            if (heartCount - 1 === 0) {
                setStatus('LOST');
                showAll();
            }

            setHeartCount(heartCount - 1);
        }

    }

    const showAll = () => setImages([...images.map(e => {
        return {img: e.img, show: true}
    })]);

    const onRestart = () => {
        setImages([...createImages()]);

        setStatus(null);
        setHeartCount(2);
    }

    return (
        <div>
            {images.map((e, i) => {
                if (e.show) {
                    console.log('showed', e);
                    return <img id={`img${i}`} className="kart" src={e.img} onClick={() => onClick(i)}/>
                }


                return <div id={`img${i}`} className="kart" onClick={() => onClick(i)}/>
            })}
            <p id="alanId">Kedi kartını bulmak için kartın üzerine tıklamalısın.</p>

            {status === 'WON' && (
                <p className="mesaj">Kazandın!!! Tebrik ederiz. Yeni bir oyun oynamak istersen <span onClick={() => onRestart()}>buraya</span> tıklayabilirsin. </p>
            )}

            {status === 'LOST' && (
                <p className="mesaj">Kaybettin :( Yeni bir oyun oynamak istersen <span onClick={() => onRestart()}>buraya</span> tıklayabilirsin.
                </p>
            )}
        </div>
    )
}

export default Kod;