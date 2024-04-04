import React, { useState } from 'react';
import OrangeButton from './OrangeButton';
import icon_title from './images/image_title.png';
import icon_main from './images/icon_main.svg';
import image_loader from './images/image_loader.png';

const ImageCenterButton = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleButtonClick = () => {
        setIsVisible(false);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-between' }}>
            <div style={{ textAlign: 'center' }}>
                {isVisible && 
                <img
                    src={icon_title}
                    style={{
                        height: "60px"
                    }}
                    alt="Top Image" />}
            </div>
            <div style={{ textAlign: 'center' }}>
                {isVisible && 
                <img 
                    src={icon_main} 
                    alt="Center Image"
                    style={{
                        height: "155px",
                        zIndex: 1
                    }}
                />}

                {isVisible && 
                <img 
                    src={image_loader} 
                    alt="Center Image"
                    style={{ 
                        height: "305px",
                        position: 'absolute', 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%) rotate(0deg)', // Начальный угол поворота
                        zIndex: 2,
                        animation: 'spin 2s linear infinite' // Анимация вращения
                    }} 
                />}
            </div>
            <div style={{ textAlign: 'center' }}>
                {isVisible && <button
                style={{ 
                    backgroundColor: '#FF9A42', 
                    color: 'white', 
                    borderRadius: '12px', 
                    padding: '10px 20px',
                    border: 'none',
                    cursor: 'pointer',
                    height: '56px',
                    width: '414px',
                    fontSize: '22px'
                }} 
                 onClick={handleButtonClick}>Hide Images</button>}
            </div>
        </div>
    );
};

export default ImageCenterButton;
