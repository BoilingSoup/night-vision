
// Fast volume bar

export default function volumeBar(ctx, data, layout) {

    let y0 = layout.height
    let w = Math.max(1, data.x2 - data.x1 - 0.5)
    let h = data.h
    let x05 = (data.x2 + data.x1) * 0.5

    ctx.lineWidth = w

    ctx.moveTo(x05, y0 - h)
    ctx.lineTo(x05, y0)

}
