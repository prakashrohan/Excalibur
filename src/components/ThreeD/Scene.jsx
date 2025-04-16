import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Scene(props) {
  const { nodes, materials } = useGLTF('./models/GothamCityAve_IJ2_Mobile.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AfterTracks001.geometry}
        material={materials['GTM_STR_MidBuildingCards_02_MIC_GAME.mat']}
        position={[2.677, 0.02, 3.895]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Barricades_Left001.geometry}
        material={materials['GTM_STR_GroundClutter_MIC_GAME.mat']}
        position={[2.435, 0.02, -40.26]}
        rotation={[0, 1.196, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BarricadesFar001.geometry}
        material={materials['GTM_STR_GroundClutter_MIC_GAME.mat']}
        position={[40.477, 0.02, -20.79]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BehindLeft001.geometry}
        material={materials['GTM_STR_MidBuildingCards_01_MIC_GAME.mat']}
        position={[-3, 0.02, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_Left001.geometry}
        material={materials['GTM_STR_MidBuildingCards_01_MIC_GAME.mat']}
        position={[-2.971, 0.02, 6.179]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BusStop001.geometry}
        material={materials['GTM_STR_GroundClutter_MIC_GAME.mat']}
        position={[0.543, 0.18, 36.71]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EastEndBot001.geometry}
        material={materials['GTM_STR_MidBuildingCards_02_MIC_GAME.mat']}
        position={[-22.798, 0.086, 26.595]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EastEndTop001.geometry}
        material={materials['GTM_STR_MidBuildingCards_01_MIC_GAME.mat']}
        position={[26.466, 1.774, 26.025]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Factory001.geometry}
        material={materials['GTM_STR_Factory_MIC_GAME.mat']}
        position={[-3.032, 0.02, 10.397]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence001.geometry}
        material={materials['GTM_STR_Factory_MIC_GAME.mat']}
        position={[-3.01, 0.02, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FireEcape001.geometry}
        material={materials['GTM_STR_Factory_MIC_GAME.mat']}
        position={[4.642, -2.744, -47.05]}
        rotation={[0, 0, Math.PI]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GarbageTruck_LOD001.geometry}
        material={materials['GTM_STR_GarbageTruck_MIC_GAME.mat']}
        position={[-0.159, 0.02, 3.691]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gazette_Left001.geometry}
        material={materials['GTM_STR_MidBuildingCards_01_MIC_GAME.mat']}
        position={[-9.086, 0.02, 25.903]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gazette_Mid001.geometry}
        material={materials['GTM_STR_MidBuildingCards_01_MIC_GAME.mat']}
        position={[26.836, 0.02, 33.343]}
        rotation={[0, 1.571, 0]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gazette_Right001.geometry}
        material={materials['GTM_STR_MidBuildingCards_01_MIC_GAME.mat']}
        position={[-45.204, 0.02, 25.903]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GroundClutter_A_St001.geometry}
        material={materials['GTM_STR_GroundClutter_MIC_GAME.mat']}
        position={[0, 0.02, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GroundClutter_B_St001.geometry}
        material={materials['GTM_STR_GroundClutter_MIC_GAME.mat']}
        position={[0, 0.02, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GroundClutter_C_St001.geometry}
        material={materials['GTM_STR_GroundClutter_MIC_GAME.mat']}
        position={[0, 0.02, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GroundClutter_D_St001.geometry}
        material={materials['GTM_STR_GroundClutter_MIC_GAME.mat']}
        position={[0, 0.02, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GroundClutter_E001.geometry}
        material={materials['GTM_STR_GroundClutter_MIC_GAME.mat']}
        position={[0, 0.02, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_Brick_St_4001.geometry}
        material={materials['GTM_STR_Floor1_MIC_GAME.mat']}
        position={[-2.995, 0.02, 0.443]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_Marquee001.geometry}
        material={materials['GTM_AVE_Theater_Marquee_MIC_GAME.mat']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_Marquee_Fixture001.geometry}
        material={materials['GTM_AVE_Theater_Marquee_MIC_GAME.mat']}
        position={[12.047, 7.652, -11.456]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_Marquee_Fixture2001.geometry}
        material={materials['GTM_AVE_Theater_Marquee_MIC_GAME.mat']}
        position={[12.047, 7.652, 6.395]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MarqueeVertical_St2_2001.geometry}
        material={materials['GTM_AVE_Theater_Marquee_MIC_GAME.mat']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Props_02_St_4001.geometry}
        material={materials['GTM_STR_Factory_MIC_GAME.mat']}
        position={[-3, 0.02, 6.15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_01_St10001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[105.493, 21.073, -20.759]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.75, 0.3, 0.564]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_01_St11001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[105.493, 15.841, -29.819]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.75, 0.3, 0.564]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_01_St2001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[105.493, 15.818, -27.806]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.75, 0.3, 0.564]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_01_St3001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[105.493, 21.073, -25.203]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.75, 0.3, 0.564]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_01_St5001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[105.493, 15.841, -32.185]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.75, 0.3, 0.564]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_01_St7001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[65.178, 12.649, -47.677]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_01_St8001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[65.178, 12.649, -41.802]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_01_St9001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[105.493, 21.073, -22.921]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.75, 0.3, 0.564]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_01_St_7001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[65.178, 12.649, -35.878]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_02_St10001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[21.395, 9.954, -29.068]}
        rotation={[0, 1.571, 0]}
        scale={[1, 0.615, 0.578]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_02_St11001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[22.514, 9.954, -29.068]}
        rotation={[0, 1.571, 0]}
        scale={[1, 0.615, 0.578]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_02_St12001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[5.815, 9.937, 41.162]}
        rotation={[0, -1.571, 0]}
        scale={[1, 0.756, 0.988]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_02_St13001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[57.605, 13.841, -20.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_02_St14001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[57.605, 18.621, -9.696]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_02_St15001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[57.605, 23.601, -20.137]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_02_St16001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[4.183, 9.937, 41.162]}
        rotation={[0, -1.571, 0]}
        scale={[1, 0.756, 0.988]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_02_St17001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[2.499, 9.937, 41.162]}
        rotation={[0, -1.571, 0]}
        scale={[1, 0.756, 0.988]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_02_St2001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[57.605, 23.601, -17.425]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_02_St4001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[57.605, 13.841, -17.423]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_02_St6001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[57.605, 18.621, -12.208]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_02_St7001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[13.38, 6.836, -38.006]}
        scale={[1, 0.546, 1.169]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_02_St8001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[13.375, 10.09, -31.107]}
        scale={[1, 0.546, 1.169]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_MidBuilding_Windows_02_St9001.geometry}
        material={materials['GTM_AVE_Windows_03_MIC_GAME.mat']}
        position={[20.274, 9.954, -29.068]}
        rotation={[0, 1.571, 0]}
        scale={[1, 0.615, 0.578]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_OuterBuildingCards_A001.geometry}
        material={materials['GTM_STR_BGBuildingCards2_MIC_GAME.mat']}
        position={[-173.92, 0.02, 69.935]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_OuterBuildingCards_B001.geometry}
        material={materials['GTM_STR_BGBuildingCards2_MIC_GAME.mat']}
        position={[-88.129, -0.328, 48.387]}
        scale={1.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_OuterBuildingCards_C001.geometry}
        material={materials['GTM_STR_BGBuildingCards2_MIC_GAME.mat']}
        position={[-357.433, 0.02, -234.082]}
        rotation={[0, 0.003, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_Sidewalk001.geometry}
        material={materials['GTM_STR_Sidewalk_MIC_GAME.mat']}
        position={[0, 0.02, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_Street_All_2_St_2001.geometry}
        material={materials['GTM_AVE_FightlineFloor_LOD_MIC_GAME.mat']}
        position={[-10.84, -0.02, -17.532]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_TheaterBuilding_St001.geometry}
        material={materials['GTM_AVE_TheaterBuilding_MIC_GAME.mat']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_TheaterEntry_Hi_St_2001.geometry}
        material={materials['GTM_AVE_Theater_Entry_MIC_GAME.mat']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_TheaterEntry_St_13001.geometry}
        material={materials['GTM_AVE_Theater_Entry_MIC_GAME.mat']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_ThtrLightsLOD_01001.geometry}
        material={materials['GTM_AVE_TheaterLights_MIC_GAME.mat']}
        position={[0, 0.02, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_ThtrLightsLOD_02001.geometry}
        material={materials['GTM_AVE_TheaterLights_MIC_GAME.mat']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_ThtrLightsLOD_03001.geometry}
        material={materials['GTM_AVE_TheaterLights_MIC_GAME.mat']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_Wire_01_St2001.geometry}
        material={materials['GTM_STR_GroundClutter_MIC_GAME.mat']}
        position={[27.09, 8.097, -12.958]}
        rotation={[-0.122, 1.411, 0.218]}
        scale={[0.471, 0.562, 0.471]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_Wire_01_St_2001.geometry}
        material={materials['GTM_STR_GroundClutter_MIC_GAME.mat']}
        position={[16.432, 10.575, -12.958]}
        rotation={[2.71, 1.449, -2.818]}
        scale={[0.471, 0.521, 0.471]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Laceys_GargoyleFace001.geometry}
        material={materials['GTM_STR_Face_MIC_GAME.mat']}
        position={[-15.037, -3.453, 19.202]}
        rotation={[-Math.PI, 1.134, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Laceys_GargoyleFace_0001.geometry}
        material={materials['GTM_STR_Face_MIC_GAME.mat']}
        position={[-15.037, -3.453, 35.079]}
        rotation={[-Math.PI, 1.133, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Laceys_GargoyleFace_1001.geometry}
        material={materials['GTM_STR_Face_MIC_GAME.mat']}
        position={[-13.935, -3.453, 13.866]}
        rotation={[-Math.PI, 1.133, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Laceys_GargoyleFace_2001.geometry}
        material={materials['GTM_STR_Face_MIC_GAME.mat']}
        position={[-13.935, -3.453, 40.463]}
        rotation={[-Math.PI, 1.133, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Laceys_Lower001.geometry}
        material={materials['GTM_AVE_Laceys2_GAME.mat']}
        position={[-22.056, 0.156, 23.05]}
        rotation={[0, 1.571, 0]}
        scale={0.92}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Laceys_Lower2001.geometry}
        material={materials['GTM_AVE_Laceys2_GAME.mat']}
        position={[-22.056, 0.156, 23.05]}
        rotation={[0, 1.571, 0]}
        scale={0.92}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Laceys_Lower3001.geometry}
        material={materials['GTM_AVE_Laceys2_GAME.mat']}
        position={[-22.056, 0.156, 23.05]}
        rotation={[0, 1.571, 0]}
        scale={0.92}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Laceys_Top001.geometry}
        material={materials['GTM_AVE_Laceys2_GAME.mat']}
        position={[-22.056, 0.156, 23.05]}
        rotation={[0, 1.571, 0]}
        scale={0.92}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Left_Gargoyle001.geometry}
        material={materials['GTM_STR_Gargoyle_MIC_GAME.mat']}
        position={[35.025, -7.998, 18.743]}
        rotation={[-Math.PI, 0.262, -Math.PI]}
        scale={0.824}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Left_Gargoyle_3001.geometry}
        material={materials['GTM_STR_Gargoyle_MIC_GAME.mat']}
        position={[80.213, -7.998, -42.159]}
        rotation={[Math.PI, -1.134, Math.PI]}
        scale={0.824}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LeftAccessoires001.geometry}
        material={materials['GTM_STR_Factory_MIC_GAME.mat']}
        position={[-3, 0.02, 6.15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LeftFar001.geometry}
        material={materials['GTM_STR_MidBuildingCards_01_MIC_GAME.mat']}
        position={[-3, 0.02, 6.15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sign_ClockFace001.geometry}
        material={materials['GTM_AVE_BuildingSigns_MIC_GAME.mat']}
        position={[13.982, 18.856, 24.1]}
        scale={0.65}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sign_EastEnd001.geometry}
        material={materials['GTM_AVE_BuildingSigns_MIC_GAME.mat']}
        position={[14.8, 5.535, 42.439]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sign_Gazette001.geometry}
        material={materials['GTM_AVE_BuildingSigns_MIC_GAME.mat']}
        position={[-17.196, 8.077, 43.86]}
        rotation={[0, -1.571, 0]}
        scale={0.689}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sign_Globs001.geometry}
        material={materials['GTM_AVE_BuildingSigns_MIC_GAME.mat']}
        position={[13.427, 7.688, -34.532]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sign_Laceys001.geometry}
        material={materials['GTM_AVE_BuildingSigns_MIC_GAME.mat']}
        position={[12.075, 6.922, 24.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StreetLightPost_1001.geometry}
        material={materials['GTM_STR_Lamp_MIC_GAME.mat']}
        position={[8.779, 0.17, -41.915]}
        rotation={[0, 0.02, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StreetLightPost_2001.geometry}
        material={materials['GTM_STR_Lamp_MIC_GAME.mat']}
        position={[8.779, 0.17, 11.642]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StreetLightPost_3001.geometry}
        material={materials['GTM_STR_Lamp_MIC_GAME.mat']}
        position={[4.006, 0.17, 34.734]}
        rotation={[Math.PI, -1.553, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StreetLightPost_Lens1001.geometry}
        material={materials['GTM_AVE_Lens_MIC_GAME.mat']}
        position={[8.779, 0.17, -41.915]}
        rotation={[0, 0.02, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StreetLightPost_Lens2001.geometry}
        material={materials['GTM_AVE_Lens_MIC_GAME.mat']}
        position={[8.779, 0.16, 11.642]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StreetLightPost_Lens3001.geometry}
        material={materials['GTM_AVE_Lens_MIC_GAME.mat']}
        position={[4.006, 0.16, 34.734]}
        rotation={[Math.PI, -1.553, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StreetLightSign001.geometry}
        material={materials['GTM_STR_Lamp_MIC_GAME.mat']}
        position={[8.785, 0.17, -13.981]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tracks_B001.geometry}
        material={materials['GTM_STR_Tracks_MIC_GAME.mat']}
        position={[-0.305, 0.02, 3.895]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_Laceys_Glass001.geometry}
        material={materials['GTM_AVE_LaceysGlass_MIC_LOW_GAME.mat']}
        position={[13.919, 1.705, 18.834]}
        scale={[0.936, 0.919, 0.919]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_Laceys_Glass2001.geometry}
        material={materials['GTM_AVE_LaceysGlass_MIC_LOW_GAME.mat']}
        position={[13.919, 1.705, 13.522]}
        scale={[0.936, 0.919, 0.919]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_Laceys_Glass3001.geometry}
        material={materials['GTM_AVE_LaceysGlass_MIC_LOW_GAME.mat']}
        position={[13.919, 1.705, 29.392]}
        scale={[0.936, 0.919, 0.919]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_Laceys_Glass4001.geometry}
        material={materials['GTM_AVE_LaceysGlass_MIC_LOW_GAME.mat']}
        position={[13.919, 1.705, 34.663]}
        scale={[0.936, 0.919, 0.919]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_Street_All_St001.geometry}
        material={materials['GTM_AVE_FightlineFloor_LOD_MIC_GAME.mat']}
        position={[-10.84, -0.02, -17.532]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Laceys_Statue001.geometry}
        material={materials['GTM_STR_Statue_MIC_LOW_GAME.mat']}
        position={[15.124, 7.544, 24.1]}
        scale={0.62}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MuscleCar001.geometry}
        material={materials['GTM_AVE_MuscleCar_MIC_LOW_GAME.mat']}
        position={[6.245, -0.021, 20.501]}
        rotation={[0, 0, Math.PI]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MuscleCar2001.geometry}
        material={materials['GTM_AVE_MuscleCar_MIC_LOW_GAME.mat']}
        position={[19.135, -0.021, -17.922]}
        rotation={[0, -1.222, -Math.PI]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PoliceCar001.geometry}
        material={materials['GTM_STR_PolicCar_BlinkingLights_Mat_LOW_GAME.mat']}
        position={[5.878, -0.018, -30.872]}
        rotation={[Math.PI, -1.203, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_ShopGlass1001.geometry}
        material={materials['GTM_AVE_ShopGlass_MIC_EXCLUDED_GAME.mat']}
        position={[13.394, 2.818, -38.143]}
        scale={[0.638, 0.638, 0.798]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_ShopGlass2001.geometry}
        material={materials['GTM_AVE_ShopGlass_MIC_EXCLUDED_GAME.mat']}
        position={[13.394, 1.519, -34.611]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GTM_AVE_ShopGlass3001.geometry}
        material={materials['GTM_AVE_ShopGlass_MIC_EXCLUDED_GAME.mat']}
        position={[13.394, 2.818, -30.949]}
        scale={0.638}
      />
    </group>
  )
}

useGLTF.preload('./models/GothamCityAve_IJ2_Mobile.glb')