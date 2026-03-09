import React, { useEffect, useRef, useState } from "react";

import {
    KnowItem,
    KnowItemImageFrame,
    KnowItemImage,
    KnowItemContent,

    KnowItemContentTitle,
    KnowItemContentText,
    KnowItemContentRate,
    KnowItemContentRateText,
    KnowItemContentRateIcon,
    KnowItemContentDescription,
    KnowItemContentAvailable
} from './styled'

export default function KnowMoreItem(props){
    const [visible, setVisible] = useState(false)
    const itemRef = useRef(null)

    const action = () => {
        if(props.link){
            window.open(props.link)
        }
    }

    useEffect(() => {
        const element = itemRef.current

        if(!element){
            return undefined
        }

        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.intersectionRatio >= 0.28)
        }, {
            rootMargin: '-10% 0px -10% 0px',
            threshold: [0, 0.12, 0.28, 0.45, 0.65]
        })

        observer.observe(element)
        return () => {
            observer.disconnect()
        }
    }, [props.index])

    return (
        <>
            <KnowItem
                ref={itemRef}
                onClick={action}
                linked={!!props.link}
                featured={props.featured}
                visible={visible}
                index={props.index || 0}
                side={props.side}
            >
                <KnowItemImageFrame featured={props.featured} visible={visible} side={props.side}>
                    <KnowItemImage src={ props.image } featured={props.featured} visible={visible} side={props.side} index={props.index || 0} />
                </KnowItemImageFrame>
                <KnowItemContent featured={props.featured} visible={visible} index={props.index || 0} side={props.side}>
                    <KnowItemContentTitle featured={props.featured}>{ props.title }</KnowItemContentTitle>
                    <KnowItemContentText>{ props.subtitle }</KnowItemContentText>
                    <KnowItemContentRate>
                        {
                            [1,2,3,4,5].map((item, key) =>
                                <KnowItemContentRateIcon key={key} rated={item <= props.rate} />
                            )
                        }
                        <KnowItemContentRateText>{ props.avaliations }</KnowItemContentRateText>
                    </KnowItemContentRate>
                    <KnowItemContentDescription featured={props.featured}>{ props.description }</KnowItemContentDescription>
                    <KnowItemContentAvailable>{ props.available }</KnowItemContentAvailable>
                </KnowItemContent>
            </KnowItem>
        </>
    );
}
