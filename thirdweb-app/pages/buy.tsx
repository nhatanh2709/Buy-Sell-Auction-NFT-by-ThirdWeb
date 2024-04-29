import React from 'react'
import { Container, Heading, Text } from '@chakra-ui/react'
import NFTGird from '../components/NFTGird'
import { NFT_COLLECTION_ADDRESS } from '../const/addresses'
import { useContract, useNFTs  } from '@thirdweb-dev/react'

export default function Buy() {
    const { contract } = useContract(NFT_COLLECTION_ADDRESS)
    const { data, isLoading } = useNFTs(contract)
    return (
        <Container maxW={"1200px"} p={5}>
            <Heading>Buy NFTs</Heading>
            <Text>Browser and buy NFTs from this collection</Text>
            <NFTGird
                isLoading={isLoading}
                data={data}
                emptyText={"No NFTs found"}
            />

        </Container>
    )
}