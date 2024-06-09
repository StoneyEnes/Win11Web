import React, { useEffect, useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const DraggableGrid = ({ items, setItems }) => {
    const [cols, setCols] = useState(12);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const updateGridSettings = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);

            // Col sayısını ekran genişliğine göre ayarlayın
            if (newWidth < 600) {
                setCols(6);
            } else if (newWidth < 1200) {
                setCols(12);
            } else {
                setCols(12);
            }
        };

        // İlk render sırasında ve pencere yeniden boyutlandırıldığında grid ayarlarını güncelleyin
        updateGridSettings();
        window.addEventListener('resize', updateGridSettings);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', updateGridSettings);
    }, []);

    // Öğeleri alt alta (dikey) dizmek için layout oluştur
    const layout = items.map((item, index) => ({
        i: item.id.toString(),
        x: 0,  // Öğelerin x konumu sabit 0 olarak ayarlanır
        y: index * 3,  // Öğelerin dikey pozisyonu (alt alta)
        w: 1, // Sabit genişlik
        h: 1.2, // Sabit yükseklik
        static: false,  // Öğelerin yeniden boyutlandırılmasını ve taşınmasını kontrol eder
    }));

    return (
        <div className="bg w-full h-full relative overflow-hidden">
            <GridLayout
                className="layout gap-2 p-5"
                layout={layout}
                cols={cols}
                rowHeight={100}  // Sabit satır yüksekliği
                width={width}
                isResizable={false}  // Öğelerin yeniden boyutlandırılmasını engelle
                onLayoutChange={(newLayout) => {
                    const updatedItems = newLayout.map((l) => {
                        const foundItem = items.find(item => item.id.toString() === l.i);
                        return {
                            ...foundItem,
                            x: l.x,
                            y: l.y,
                            w: l.w,
                            h: l.h,
                        };
                    });
                    setItems(updatedItems);
                }}
                verticalCompact={false}  // Y ekseninde öğelerin serbest hareket edebilmesi için
                preventCollision={true}  // Çakışmayı önler
                compactType={null}  // Öğe yerleşim kompaktlığını kapatır
            >
                {items.map((item) => (
                    <div key={item.id}
                         className="h-full flex justify-center items-center flex-col"
                    >
                        <img className={!item.imageVertical ? "w-20 h-20" : "w-16"} src={item.image} alt=""/>
                        {item.content}
                    </div>
                ))}
            </GridLayout>
        </div>
    );
};

export default DraggableGrid;
