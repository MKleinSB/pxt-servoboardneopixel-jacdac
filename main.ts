namespace modules {
    /**
     * Calliope mini Neopixelstreifen an Servoboard C8
     */
    //% fixedInstance whenUsed block="Calliope Neopixelstrip C8"
    //% block.loc.de="Calliope Neopixelstreifen C8"
    export const CallipeNeopixelStrip1 = new LedClient("Calliope Neopixelstrip C8?dev=self&num_pixels=50&variant=Strip")
 
    //% fixedInstance whenUsed block="Calliope Neopixelstrip C9"
    //% block.loc.de="Calliope Neopixelstreifen C9"
    export const CallipeNeopixelStrip2 = new LedClient("Calliope Neopixelstrip C9?dev=self&num_pixels=50&variant=Strip")
}
namespace servers {
    function start() {
        jacdac.productIdentifier = 0x32690c10
        jacdac.deviceDescription = "Calliope Servoboard Neopixels"
        jacdac.startSelfServers(() => {
       const servers = [
                new jacdac.LedServer(50,
                    jacdac.LedPixelLayout.RgbGrb,
                    (pixels, brightness) => light.sendWS2812BufferWithBrightness(pixels, DigitalPin.C8, brightness), {
                    variant: jacdac.LedVariant.Strip,
                    instanceName: "C8"
                }),
                new jacdac.LedServer(50,
                    jacdac.LedPixelLayout.RgbGrb,
                    (pixels, brightness) => light.sendWS2812BufferWithBrightness(pixels, DigitalPin.C9, brightness), {
                    variant: jacdac.LedVariant.Strip,
                    instanceName: "C9"
                }
                )
            ]
            return servers
        })
    }
    start()
}