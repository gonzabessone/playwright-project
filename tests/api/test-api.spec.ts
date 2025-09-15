import {test, expect, request} from '@playwright/test';


test('simple get request', async ({request}) => {
    const response = await request.get('https://conduit-api.bondaracademy.com/api/tags')
    const responseObject = await response.json()
    console.log(responseObject);
    expect(responseObject.tags[0]).toEqual('Test')
    expect(responseObject.tags).toHaveLength(10)
})
