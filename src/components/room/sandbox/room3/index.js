import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Loader from "./loader";
import { Room } from "./room";
import NFT from "./nft";

import HomeButton from "./homeButton";
import "./index.scss";

const Room3 = () => {
  const roomData = {
    information: {
      name: "MVP Room",
      filename: "Room 3.glb",
      description: "This room is one of excellent Room",
      price: 0.5,
      image: "/img/mvp-room.png",
    },
    camera: {
      position: [4, 1.5, -3],
      fov: 60,
      rotation: [0, 0, 0],
    },
    lights: [
      {
        intensity: 1,
        color: "rgb(255, 214, 170)",
        position: [3.6, 2.5, -4.6],
      },
    ],
    nfts: [
      {
        position: [7.98, 1.5, -8.01],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/0.png",
        size: [1, 1],
      },
      {
        position: [7.98, 1.5, -6.01],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/1.png",
        size: [1, 1],
      },
      {
        position: [7.98, 1.5, -4.01],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/2.png",
        size: [1, 1],
      },
      {
        position: [0.03, 1.5, -4.01],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/3.png",
        size: [1, 1],
      },
      {
        position: [0.03, 1.5, -6.01],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/4.png",
        size: [1, 1],
      },
      {
        position: [0.03, 1.5, -8.01],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/5.png",
        size: [1, 1],
      },
      {
        position: [2.01, 1.5, -9.97],
        rotation: [0, 0, 0],
        name: "/nft/6.png",
        size: [1, 1],
      },
      {
        position: [4.01, 1.5, -9.97],
        rotation: [0, 0, 0],
        name: "/nft/7.png",
        size: [1, 1],
      },
      {
        position: [6.01, 1.5, -9.97],
        rotation: [0, 0, 0],
        name: "/nft/8.png",
        size: [1, 1],
      },
      {
        position: [1.01, 1.5, -0.05],
        rotation: [0, -Math.PI, 0],
        name: "/nft/9.png",
        size: [1, 1],
      },
      {
        position: [4.01, 1.5, -0.05],
        rotation: [0, -Math.PI, 0],
        name: "/nft/10.png",
        size: [1, 1],
      },
      {
        position: [7.01, 1.5, -0.05],
        rotation: [0, -Math.PI, 0],
        name: "/nft/11.png",
        size: [1, 1],
      },
    ],
  };

  return (
    <>
      <Canvas
        shadows
        camera={{
          position: roomData.camera.position,
          fov: roomData.camera.fov,
          rotation: roomData.camera.rotation,
        }}
      >
        <Suspense fallback={<Loader />}>
          {/* Room */}
          {roomData.information.filename ? (
            <Room name={roomData.information.filename} />
          ) : (
            <></>
          )}
          {/* NFTs */}
          {roomData.nfts.map((nft, index) => {
            return (
              <NFT
                position={nft.position}
                rotation={nft.rotation}
                name={nft.name}
                no={index}
                size={nft.size}
                key={index}
              />
            );
          })}
          {/* Lights */}
          {roomData.lights.map((light, index) => (
            <pointLight
              intensity={light.intensity}
              color={light.color}
              position={light.position}
              key={index}
            />
          ))}
        </Suspense>
      </Canvas>
      <HomeButton />
    </>
  );
};

export default Room3;
