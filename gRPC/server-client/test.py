import asyncio
async def async_func():
    print('Velotio ...')
    await asyncio.sleep(1)
    print('... Blog!')

async def main():
    task = asyncio.create_task (async_func())
    await task
    
asyncio.run(main())
print("yes")
