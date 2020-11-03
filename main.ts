basic.forever(function () {
    basic.showNumber(minode.DHTGetTemperature(ConnName.A1, DHTTemStyle.MINODE_DHT_CELSIUS))
    if (minode.DHTGetTemperature(ConnName.A1, DHTTemStyle.MINODE_DHT_CELSIUS) > 26) {
        minode.FanControl_1(AnalogConnName.Analog_A0, 100)
    } else {
        minode.FanControl_1(AnalogConnName.Analog_A0, 0)
    }
})
