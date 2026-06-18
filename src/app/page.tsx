"use client"

import { useEffect, useState } from "react";

import { Info } from "@/components/info-pasta/info";
import { GridArea } from "@/components/grid-pasta/grid-area";

import { GridItemType } from "@/types/gridItemType";
import { items } from "@/data/items";

const Page = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => resetAndCreateGrid(), []);

  useEffect(() => {
    const timer = setInterval(() => {
      if(playing) setTimeElapsed(timeElapsed + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  // Verifiacar se os abertos são iguais
  useEffect(() => {
    if(shownCount === 2) {
      let opened = gridItems.filter(item => item.shown);
      if(opened.length === 2) {

        // v1 - Se eles são iguais tornalos permanentes
        if(opened[0].item === opened[1].item) {
          let tempGrid = [...gridItems];
          for(let i in tempGrid) {
            if(tempGrid[i].shown) {
              tempGrid[i].permanentShown = true;
              tempGrid[i].shown = false;
            }
            setGridItems(tempGrid);
            setShownCount(0);
          }
        } else {
          // v2 - Se eles são diferentes fechalos
          setTimeout(() => {
            let tempGrid = [...gridItems];
            for(let i in tempGrid) {
              tempGrid[i].shown = false;
            }
            setGridItems(tempGrid);
            setShownCount(0);
          }, 1000);
        }

        setMoveCount(moveCount => moveCount + 1);
      }
    }
  }, [shownCount, gridItems]);

  // Verificar se o jogo acabou
  useEffect(() => {
    if(moveCount > 0 && gridItems.every(items => items.permanentShown)) {
      setPlaying(false);
    }
  }, [moveCount, gridItems]);

  const resetAndCreateGrid = () => {
    // passo 1 - Resetar o jogo
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    // passo 2 - Criar o grid

    // 2.1 - Criar um grid vazio
    let tempGrid: GridItemType[] = [];
    for (let i = 0; i < (items.length * 2); i++) {
      tempGrid.push({
        item: null,
        shown: false,
        permanentShown: false
      });
    }

    // 2.2 - Preencher o grid
    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let pos = -1;
        while (pos < 0 || tempGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tempGrid[pos].item = i;
      }
    }

    // 2.3 - Jogar no state
    setGridItems(tempGrid);

    // passo 3 - Começar o jogo
    setPlaying(true);
  }

  return (
    <div className="w-full max-w-187.5 mx-auto flex flex-col py-12.5 lg:flex-row">
      <Info func={resetAndCreateGrid} time={timeElapsed} moveValue={moveCount} />

      <GridArea gridItems={gridItems} play={playing} setCount={setShownCount} count={shownCount} setGridItems={setGridItems} />
    </div>
  );
}

export default Page; 