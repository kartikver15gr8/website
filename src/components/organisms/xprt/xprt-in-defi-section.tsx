import XPRTDefiCard, {
  XPRTDefiCardInterface
} from "@/components/molecules/xprt-defi-card";
import { Container, VStack, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAppStore } from "@/store/store";
import { shallow } from "zustand/shallow";
import { DexterPoolsInfo, PoolInfo } from "@/store/slices/initial-data-slice";

const getData = (dexterInfo: DexterPoolsInfo, osmoPoolsInfo: PoolInfo) => {
  const defiCards: XPRTDefiCardInterface[] = [
    {
      tokens: [
        {
          name: "ATOM",
          image: "/images/tokens/atom.svg"
        },
        {
          name: "XPRT",
          image: "/images/tokens/xprt.svg"
        }
      ],
      cta: {
        label: "Dexter",
        link: "https://app.dexter.zone",
        bg: "buttons.ctaBlue"
      },
      description:
        "Provide liquidity to the ATOM/XPRT pool to earn trading fees and external incentives",
      stats: [
        {
          label: "TVL",
          value: dexterInfo[2].tvl.toString()
        },
        {
          label: "APR",
          value: dexterInfo[2].apy.toString()
        }
      ]
    },
    {
      tokens: [
        {
          name: "XPRT",
          image: "/images/tokens/xprt.svg"
        },
        {
          name: "OSMO",
          image: "/images/tokens/osmo.svg"
        }
      ],
      cta: {
        label: "Osmosis",
        link: "https://app.osmosis.zone",
        bg: "buttons.ctaPink"
      },
      description:
        "Provide liquidity to the XPRT/OSMO Supercharged pool to earn trading fees and external incentives. ",
      stats: [
        {
          label: "TVL",
          value: osmoPoolsInfo.tvl.toString()
        },
        {
          label: "APR",
          value: osmoPoolsInfo.apy.toString()
        }
      ]
    },
    {
      tokens: [
        {
          name: "XPRT",
          image: "/images/tokens/xprt.svg"
        },
        {
          name: "USDT",
          image: "/images/tokens/usdt.svg"
        }
      ],
      cta: {
        label: "Dexter",
        link: "https://app.dexter.zone",
        bg: "buttons.ctaBlue"
      },
      description:
        "Provide liquidity to the USDT/XPRT pool to earn trading fees and external incentives",
      stats: [
        {
          label: "TVL",
          value: dexterInfo[5].tvl.toString()
        },
        {
          label: "APR",
          value: dexterInfo[5].apy.toString()
        }
      ]
    },
    {
      tokens: [
        {
          name: "XPRT",
          image: "/images/tokens/xprt.svg"
        },
        {
          name: "PSTAKE",
          image: "/images/tokens/pstake.svg"
        }
      ],
      cta: {
        label: "Dexter",
        link: "https://app.dexter.zone",
        bg: "buttons.ctaBlue"
      },
      description:
        "Provide liquidity to the PSTAKE/XPRT pool to earn trading fees and external incentives",
      stats: [
        {
          label: "TVL",
          value: dexterInfo[3].tvl.toString()
        },
        {
          label: "APR",
          value: dexterInfo[3].apy.toString()
        }
      ]
    }
  ];
  return defiCards;
};

const XPRTInDefiSection = () => {
  const [dexterPoolsInfo, osmoPoolsInfo] = useAppStore(
    (state) => [state.dexterPoolsInfo, state.osmoPoolsInfo],
    shallow
  );

  const xprtDefiCards = getData(dexterPoolsInfo, osmoPoolsInfo);
  return (
    <Container maxW={"1200px"} px={"50px"}>
      <VStack align={"center"}>
        <Heading variant={"main"} fontSize={58}>
          XPRT in DeFi
        </Heading>
        <SimpleGrid columns={2} spacing={4} mt={8}>
          {xprtDefiCards.map((card, index) => (
            <XPRTDefiCard key={index} {...card} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default XPRTInDefiSection;
