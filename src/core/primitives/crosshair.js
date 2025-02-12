// Crosshair layer. Extends Layer class,
// TODO: can be replaced by overlay script

import Layer from '../layer.js'

export default class Crosshair extends Layer {

    constructor(id) {
        super(id, '__$Crosshair__')

        this.id = id
        this.zIndex = 1000000
        this.ctxType = 'Canvas'

        this.overlay = {
            draw: this.draw.bind(this),
            destroy: this.destroy.bind(this)
        }

        this.env = {
            update: this.envEpdate.bind(this)
        }
    }

    draw(ctx) {

        if (!this.layout) return

        const cursor = this.props.cursor

        if (!cursor.visible) return

        //if (!this.visible && cursor.mode === 'explore') return

        ctx.save()
        ctx.strokeStyle = this.props.colors.cross
        ctx.beginPath()
        ctx.setLineDash([5])

        // H
        if (cursor.gridId === this.layout.id) {
            ctx.moveTo(0, cursor.y)
            ctx.lineTo(this.layout.width - 0.5, cursor.y)
        }

        // V
        ctx.moveTo(cursor.x, 0)
        ctx.lineTo(cursor.x, this.layout.height)
        ctx.stroke()
        ctx.restore()
    }

    envEpdate(ovSrc, layout, props) {
        this.ovSrc = ovSrc
        this.layout = layout
        this.props = props
    }

    onCursor(update) {
        if (this.props) this.props.cursor = update
    }

    destroy() {}
}
