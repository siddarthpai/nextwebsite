import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import { WorkLeft, WorkRight, WorkBackground, WorkContainer, WorkLink } from "./work";
import Image from "next/image";

const Works = () =>(
    <TileWrapper numOfPages={3}>
        <TileBackground page={0} renderContent={function (props: { progress: number; }) {
            throw new Error("Function not implemented.");
        } }><WorkBackground/></TileBackground>
        <TileContent page={0} renderContent={function (props: { progress: number; }) {
            throw new Error("Function not implemented.");
        } }>
            <Tile 
            page={0} 
            renderContent={({progress}) => (
                <WorkContainer>
                    <WorkLeft progress={progress}>
                        <div>We Design</div>
                        <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                            <WorkLink href="https://www.instagram.com/p/CpZ9Yu6pp5m/?utm_source=ig_web_copy_link">Oversized</WorkLink> T-Shirts
                        </div>
                    </WorkLeft>
                    <WorkRight progress={progress}>
                        <Image src="/assets/works/ot2.jpg" layout="responsive" width={840} height={1620} alt="Oversizedtee" />

                    </WorkRight>
                </WorkContainer>
            
            )}
        ></Tile>
        <Tile 
        page={1} 
        renderContent={({progress}) => (
            <WorkContainer>
                    <WorkLeft progress={progress}>
                        <div>We Re-Defined</div>
                        <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                            <WorkLink href="https://www.instagram.com/p/CjK81Clpmj5/?utm_source=ig_web_copy_link">Hoodies</WorkLink>
                        </div>
                    </WorkLeft>
                    <WorkRight progress={progress}>
                        <Image src="/assets/works/hood.png" layout="responsive" width={840} height={1620} alt="Hoodie" />

                    </WorkRight>
            </WorkContainer>
            )}
        ></Tile>
        <Tile 
        page={2} 
        renderContent={({progress}) => (
            <WorkContainer>
                    <WorkLeft progress={progress}>
                        <div>We Revolutionized</div>
                        <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                            <WorkLink href="https://www.instagram.com/p/Cml2WlnJ_wQ/?utm_source=ig_web_copy_link">Varsities</WorkLink>
                        </div>
                    </WorkLeft>
                    <WorkRight progress={progress}>
                        <Image src="/assets/works/var.jpg" layout="responsive" width={840} height={1620} alt="Varsity" />

                    </WorkRight>
            </WorkContainer>
            )}
        ></Tile>
        </TileContent>
    </TileWrapper>
)

export default Works