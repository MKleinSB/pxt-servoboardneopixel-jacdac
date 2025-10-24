namespace modules {
    /**
     * Calliope mini Neopixelstreifen an Servoboard C8
     */
    //% fixedInstance whenUsed block="Calliope Neopixelstrip C8"
    //% block.loc.de="Calliope Neopixelstreifen"
    export const CallipeNeopixelStrip1 = new LedStripClient("Calliope Neopixelstrip C8?dev=self&num_pixels=150&variant=Strip")


}
namespace servers {
    function start() {
        jacdac.productIdentifier = 0x32690c10
        jacdac.deviceDescription = "Calliope Neopixelstrip C8"
        jacdac.startSelfServers(() => {
            const pin = DigitalPin.C8
            pins.setPull(pin, PinPullMode.PullNone)
            const sendPixels = (pixels: Buffer, brightness: number) => light.sendWS2812BufferWithBrightness(pixels, pin, brightness)
            const servers = [
                new jacdac.LedServer(
                    150,
                    jacdac.LedPixelLayout.RgbGrb,
                    sendPixels, {
                    variant: jacdac.LedVariant.Strip
                })
            ]
            return servers
        })
    }
    start()
}
