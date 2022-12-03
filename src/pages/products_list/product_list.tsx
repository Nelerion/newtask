import Card from "./product_card";
import "./style.scss";
import { useStoreState} from "../../state/state";
import {
  List as ListAuto,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
import React from "react";

const List: React.FC = () => {
  const products = useStoreState("products");
  const cache = React.useRef(
    new CellMeasurerCache({
      fixWidth: true,
      defaultHeight: 1,
    })
  );

  return (
    <div className="products" style={{ width: "100%", height: "100vh" }}>
      <AutoSizer>
        {({ width, height }: { width: number, height: number }) => (
          <ListAuto
            width={width}
            height={height}
            rowHeight={110}
            deferredMeasurementCache={cache.current}
            rowCount={products.length}
            rowRenderer={({ key, index, style, parent }: any) => {
              const item = products[index];
              return (
                <CellMeasurer
                  key={key}
                  cache={cache.current}
                  parent={parent}
                  columnIndex={1}
                  rowIndex={index}
                >
                  <Card
                    id={item.id}
                    uuid={item.uuid}
                    name={item.name}
                    price={item.price}
                    url={item.src}
                    style={style}
                  />
                </CellMeasurer>
              );
            }}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default List;
