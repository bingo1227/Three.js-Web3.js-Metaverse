import roomReducer from "./roomReducers";

test("should return the initial state", () => {
  expect(roomReducer(undefined, {})).toEqual({
    information: {},
    lights: [],
    nfts: [],
  });
});

test("should return the room added state", () => {
  const payload = {
    information: {
      creator: "Pioneer1",
      name: "MVP Room1",
      filename: "Room 1.glb",
      description: "This room is first of excellent Room",
      price: 0.5,
      image: "/img/room1.png",
      frames: 44,
    },
    conflict: "conflict1",
    camera: {
      position: [-4, 2, 12],
      fov: 60,
      rotation: [0, 0, 0],
    },
    lights: [
      {
        intensity: 0.5,
        color: "rgb(255, 214, 170)",
        position: [-4.5, 2.3, 13],
      },
      {
        intensity: 0.5,
        color: "rgb(255, 214, 170)",
        position: [-4.5, 2.3, 2.5],
      },
      {
        intensity: 0.5,
        color: "rgb(255, 214, 170)",
        position: [-4.5, 2.3, -8],
      },
      {
        intensity: 0.5,
        color: "rgb(255, 214, 170)",
        position: [4, 2.3, -8],
      },
    ],
    nfts: [
      {
        position: [7.97, 2, -8.4],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/0.png",
        size: [2, 2],
      },
      {
        position: [7.97, 2, -4.4],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/1.png",
        size: [2, 2],
      },
      {
        position: [-0.022, 2, -0.2],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/3.png",
        size: [2, 2],
      },
      {
        position: [-0.022, 2, 3.8],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/4.png",
        size: [2, 2],
      },
      {
        position: [-0.022, 2, 8],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/5.png",
        size: [2, 2],
      },
      {
        position: [-0.022, 2, 12],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/6.png",
        size: [2, 2],
      },
      {
        position: [-8.05, 2, -8.4],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/7.png",
        size: [2, 2],
      },
      {
        position: [-8.05, 2, -4.4],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/8.png",
        size: [2, 2],
      },
      {
        position: [-7.97, 2, -0.2],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/9.png",
        size: [2, 2],
      },
      {
        position: [-7.97, 2, 3.8],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/10.png",
        size: [2, 2],
      },
      {
        position: [-8.05, 2, 8],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/11.png",
        size: [2, 2],
      },
      {
        position: [-8.05, 2, 12],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/12.png",
        size: [2, 2],
      },
      {
        position: [-6, 2, -10.38],
        rotation: [0, 0, 0],
        name: "/nft/13.png",
        size: [2, 2],
      },
      {
        position: [-2, 2, -10.38],
        rotation: [0, 0, 0],
        name: "/nft/14.png",
        size: [2, 2],
      },
      {
        position: [2, 2, -10.38],
        rotation: [0, 0, 0],
        name: "/nft/15.png",
        size: [2, 2],
      },
      {
        position: [6, 2, -10.38],
        rotation: [0, 0, 0],
        name: "/nft/16.png",
        size: [2, 2],
      },
      {
        position: [-6, 2, 13.97],
        rotation: [0, -Math.PI, 0],
        name: "/nft/17.png",
        size: [2, 2],
      },
      {
        position: [-2, 2, 13.97],
        rotation: [0, -Math.PI, 0],
        name: "/nft/18.png",
        size: [2, 2],
      },
      {
        position: [1, 2, -2.44],
        rotation: [0, -Math.PI, 0],
        name: "/nft/19.png",
        size: [2, 2],
      },
      {
        position: [5, 2, -2.44],
        rotation: [0, -Math.PI, 0],
        name: "/nft/20.png",
        size: [2, 2],
      },
    ],
  };
  expect(
    roomReducer(undefined, {
      type: "ADD_ROOM",
      payload,
    })
  ).toEqual(payload);
});

test("should return the change room state", () => {
  const previousState = {
    information: {
      creator: "Pioneer1",
      name: "MVP Room1",
      filename: "Room 1.glb",
      description: "This room is first of excellent Room",
      price: 0.5,
      image: "/img/room1.png",
      frames: 44,
    },
    conflict: "conflict1",
    camera: {
      position: [-4, 2, 12],
      fov: 60,
      rotation: [0, 0, 0],
    },
    lights: [
      {
        intensity: 0.5,
        color: "rgb(255, 214, 170)",
        position: [-4.5, 2.3, 13],
      },
      {
        intensity: 0.5,
        color: "rgb(255, 214, 170)",
        position: [-4.5, 2.3, 2.5],
      },
      {
        intensity: 0.5,
        color: "rgb(255, 214, 170)",
        position: [-4.5, 2.3, -8],
      },
      {
        intensity: 0.5,
        color: "rgb(255, 214, 170)",
        position: [4, 2.3, -8],
      },
    ],
    nfts: [
      {
        position: [7.97, 2, -8.4],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/0.png",
        size: [2, 2],
      },
      {
        position: [7.97, 2, -4.4],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/1.png",
        size: [2, 2],
      },
      {
        position: [-0.022, 2, -0.2],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/3.png",
        size: [2, 2],
      },
      {
        position: [-0.022, 2, 3.8],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/4.png",
        size: [2, 2],
      },
      {
        position: [-0.022, 2, 8],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/5.png",
        size: [2, 2],
      },
      {
        position: [-0.022, 2, 12],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/6.png",
        size: [2, 2],
      },
      {
        position: [-8.05, 2, -8.4],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/7.png",
        size: [2, 2],
      },
      {
        position: [-8.05, 2, -4.4],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/8.png",
        size: [2, 2],
      },
      {
        position: [-7.97, 2, -0.2],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/9.png",
        size: [2, 2],
      },
      {
        position: [-7.97, 2, 3.8],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/10.png",
        size: [2, 2],
      },
      {
        position: [-8.05, 2, 8],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/11.png",
        size: [2, 2],
      },
      {
        position: [-8.05, 2, 12],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/12.png",
        size: [2, 2],
      },
      {
        position: [-6, 2, -10.38],
        rotation: [0, 0, 0],
        name: "/nft/13.png",
        size: [2, 2],
      },
      {
        position: [-2, 2, -10.38],
        rotation: [0, 0, 0],
        name: "/nft/14.png",
        size: [2, 2],
      },
      {
        position: [2, 2, -10.38],
        rotation: [0, 0, 0],
        name: "/nft/15.png",
        size: [2, 2],
      },
      {
        position: [6, 2, -10.38],
        rotation: [0, 0, 0],
        name: "/nft/16.png",
        size: [2, 2],
      },
      {
        position: [-6, 2, 13.97],
        rotation: [0, -Math.PI, 0],
        name: "/nft/17.png",
        size: [2, 2],
      },
      {
        position: [-2, 2, 13.97],
        rotation: [0, -Math.PI, 0],
        name: "/nft/18.png",
        size: [2, 2],
      },
      {
        position: [1, 2, -2.44],
        rotation: [0, -Math.PI, 0],
        name: "/nft/19.png",
        size: [2, 2],
      },
      {
        position: [5, 2, -2.44],
        rotation: [0, -Math.PI, 0],
        name: "/nft/20.png",
        size: [2, 2],
      },
    ],
  };
  const payload = {
    no: 2,
    name: "/nft/10.png",
  };
  const currentState = {
    information: {
      creator: "Pioneer1",
      name: "MVP Room1",
      filename: "Room 1.glb",
      description: "This room is first of excellent Room",
      price: 0.5,
      image: "/img/room1.png",
      frames: 44,
    },
    conflict: "conflict1",
    camera: {
      position: [-4, 2, 12],
      fov: 60,
      rotation: [0, 0, 0],
    },
    lights: [
      {
        intensity: 0.5,
        color: "rgb(255, 214, 170)",
        position: [-4.5, 2.3, 13],
      },
      {
        intensity: 0.5,
        color: "rgb(255, 214, 170)",
        position: [-4.5, 2.3, 2.5],
      },
      {
        intensity: 0.5,
        color: "rgb(255, 214, 170)",
        position: [-4.5, 2.3, -8],
      },
      {
        intensity: 0.5,
        color: "rgb(255, 214, 170)",
        position: [4, 2.3, -8],
      },
    ],
    nfts: [
      {
        position: [7.97, 2, -8.4],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/0.png",
        size: [2, 2],
      },
      {
        position: [7.97, 2, -4.4],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/1.png",
        size: [2, 2],
      },
      {
        position: [-0.022, 2, -0.2],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/10.png",
        size: [2, 2],
      },
      {
        position: [-0.022, 2, 3.8],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/4.png",
        size: [2, 2],
      },
      {
        position: [-0.022, 2, 8],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/5.png",
        size: [2, 2],
      },
      {
        position: [-0.022, 2, 12],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/6.png",
        size: [2, 2],
      },
      {
        position: [-8.05, 2, -8.4],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/7.png",
        size: [2, 2],
      },
      {
        position: [-8.05, 2, -4.4],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/8.png",
        size: [2, 2],
      },
      {
        position: [-7.97, 2, -0.2],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/9.png",
        size: [2, 2],
      },
      {
        position: [-7.97, 2, 3.8],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/10.png",
        size: [2, 2],
      },
      {
        position: [-8.05, 2, 8],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/11.png",
        size: [2, 2],
      },
      {
        position: [-8.05, 2, 12],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/12.png",
        size: [2, 2],
      },
      {
        position: [-6, 2, -10.38],
        rotation: [0, 0, 0],
        name: "/nft/13.png",
        size: [2, 2],
      },
      {
        position: [-2, 2, -10.38],
        rotation: [0, 0, 0],
        name: "/nft/14.png",
        size: [2, 2],
      },
      {
        position: [2, 2, -10.38],
        rotation: [0, 0, 0],
        name: "/nft/15.png",
        size: [2, 2],
      },
      {
        position: [6, 2, -10.38],
        rotation: [0, 0, 0],
        name: "/nft/16.png",
        size: [2, 2],
      },
      {
        position: [-6, 2, 13.97],
        rotation: [0, -Math.PI, 0],
        name: "/nft/17.png",
        size: [2, 2],
      },
      {
        position: [-2, 2, 13.97],
        rotation: [0, -Math.PI, 0],
        name: "/nft/18.png",
        size: [2, 2],
      },
      {
        position: [1, 2, -2.44],
        rotation: [0, -Math.PI, 0],
        name: "/nft/19.png",
        size: [2, 2],
      },
      {
        position: [5, 2, -2.44],
        rotation: [0, -Math.PI, 0],
        name: "/nft/20.png",
        size: [2, 2],
      },
    ],
  };
  expect(
    roomReducer(previousState, {
      type: "CHANGE_ROOM",
      payload,
    })
  ).toEqual(currentState);
});
