import mapa from "../assets/mapa.jpg";

export default function Root() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={mapa} useMap="#image-map" 
                />
            </div>

            <map name="image-map">
                <area href="#area1" coords="178,430,59" shape="circle" />
                <area target="_parent" alt="b" title="b" href="b" coords="317,514,55" shape="circle" />
                <area target="_self" alt="c" title="c" href="c" coords="428,641,52" shape="circle" />
                <area target="_top" alt="d" title="d" href="d" coords="594,465,52" shape="circle" />
                <area target="" alt="e" title="e" href="e" coords="950,657,45" shape="circle" />
                <area target="" alt="f" title="f" href="f" coords="1042,557,44" shape="circle" />
            </map>
        </>
    );
}