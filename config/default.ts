export default {
    port: 3000,
    db: "mongodb://root:password@localhost:27017/",
    saltRound: 10,
    accessTokenTTL: 1800, // 30 min
    refreshTokenTTL: 2.628e6, // 1 month
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAhVN2+i52cOlZkqNu499Sg0fyWMU0MwBuxHuiW7YHr4h4rEow
RrJJarDHguzMy1L8DbkSl7wifGPCExdSFyHzVxAmRDzgRiKr/5drVfpdp0n1XQFU
+bvWfUnMrQAyXAKbtBYYE/s+gDqT0Jzl/LZqebxAugd8bkNuZ0HxcP4uvcgCzy3E
x0KkhZN8eGxzagp33XyXKNfDAfXzrUYCBwx9pxp0mMwpCH6YDEDh1mda0p0nsrPA
GwK+sCbUsqTpvrSgb3FP16DQJG2OUmVlrUBvqEDvRN/vjMkUz/v/mj5B3MelPRx6
mdzG4MEMMwfQ/i7yiFAQZYEyFl5WXP+B12iMqQIDAQABAoIBAEIea1GU+y3xu3cq
T9L4LF5orrnxSnrEiyorug/LTTJy9o1S2XAl+JzNgJPgRYvL4q4Xiy3uoheYDWYU
WaSZNKmHm8KZggumJDBD8noYCJvu5Jy0DWUwDyXhFHzzLQZOUNNVZal7HrrO0gFR
3gieml02y8616bJxBG522HrVw25f55uvUox/9EGDGhZFBlF21lbOEX2UUS6hX5HI
32tU/mw2UViHc4XpEYp81XudZzIMSN1X3hbOYC5knBeLA8965GDlysIhMaeUbz6k
OuiTUcz6XTa2RpCTdmuqPyicNBPf5UmIUUeeRZRvMnrYMdV/VYLiyFmlGqT51tfB
A5ZaiIECgYEA5uZj0BUXs2IhdJV8/gOOHMyCk3zxGaQMYApmTJmrFRTC4GHURDEi
MuzBEIhVC3RBcqQGwIxGWojz6mTfhc8MlVejRHYQ30z46D2msrW9+lLiTUvRiyR5
v7Hhn0ZxGiTvXL3CdxV/dCtMRORT0UiEqfzkI58DT5L9dL1pK3J0vvkCgYEAk9G8
ASBz+/0lbOTjTuEn7VjTEdgrYzOoUx/9z9ACULQkmsTydWYtHZkw6MQcw43Pu0BX
IZRbL2ml8UYA+YSvgPAKwrgmp6c95jpmS3X91fBJc2fEWWen6eYybNgymfP5xAQl
zv7v5g9o3J8UT0Ay64r8bbqgOZDN627c/RXstzECgYBJGW9IFSVnuQ12Z00m7eEz
5NsB7nA1+eWhEinI3m13QxdfChm1bQiyrpmArmieM7P0o1Ev7DjpuKnf7weEyUPm
k9QwfGBjEW9LtxjrQvZeJZdXeUVhk66nrZ0MW7S63i6ZYcoLAVdUY9DFjrOqchbt
6g4f6NuXeaWcK8r74kRroQKBgF20ghLQyNXANx5dxr71OoNaYIsaVv7O+3Cegh5f
xWf1mpLGMNE9UXJG71tPHtDUsBALDHEMA/X9aiWV8/45H6yD/r5LUK3M9g9hjAFg
LeaWKWnQKQdoD2jV9bdMIl+36uhYnMMol1lnAVmCOrS2hNEOTVEeEn4Ljo4lvE9v
u5yxAoGATOz9tEs1BeB0zx08GuXDxIhaJrQYrq5ouA8DauQF4FkW8DNV76grbZq6
VkE78ycSAO28uPiGvJb3wQfYA7cgm+LbTIPR9jEP3ZXAQV2sYqTIW4MqF9OG4XVl
HLScqOEuFrSldJw3mo3ZsK9xVXCcU0aZf4Y86zwoXV3ZcsZATo0=
-----END RSA PRIVATE KEY-----`,
    publicKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhVN2+i52cOlZkqNu499S
g0fyWMU0MwBuxHuiW7YHr4h4rEowRrJJarDHguzMy1L8DbkSl7wifGPCExdSFyHz
VxAmRDzgRiKr/5drVfpdp0n1XQFU+bvWfUnMrQAyXAKbtBYYE/s+gDqT0Jzl/LZq
ebxAugd8bkNuZ0HxcP4uvcgCzy3Ex0KkhZN8eGxzagp33XyXKNfDAfXzrUYCBwx9
pxp0mMwpCH6YDEDh1mda0p0nsrPAGwK+sCbUsqTpvrSgb3FP16DQJG2OUmVlrUBv
qEDvRN/vjMkUz/v/mj5B3MelPRx6mdzG4MEMMwfQ/i7yiFAQZYEyFl5WXP+B12iM
qQIDAQAB
-----END PUBLIC KEY-----`,
};
