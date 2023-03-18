import React from 'react';

import {
  Box,
  Heading,
  Container,
  Text,
  Avatar,
  Wrap, 
  WrapItem,
  chakra,
  Flex,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Grid,
  Button,
  Stack,
  Icon,
  StackDivider,
  VStack,
  List,
  ListItem,

  useColorModeValue,
  VisuallyHidden,
  createIcon,
  ChakraProvider,
  IconButton,
  Collapse,
  Link,
  Popover,
  PopoverTrigger,
  GridItem,
  useColorMode,
  PopoverContent,
  useBreakpointValue,
  useDisclosure,
  Center,
  Image
} from "@chakra-ui/react"
import { MdLocalShipping } from "react-icons/md"
import {  FaDiscord } from "react-icons/fa"
import {SiDiscord} from "react-icons/si"
import {
  HamburgerIcon,
  CloseIcon,
  MoonIcon, SunIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from "@chakra-ui/icons"
import { useEffect } from 'react';

const products = [
  {
    name: "Futuristic Sci-Fi City Digital Wallpaper",
    cost: "1.00",
    img: "./productImages/City.png",
    heading: "Upgrade Your Desktop with a Futuristic Sci-Fi City Digital PC Wallpaper",
    text: "Add some futuristic flair to your desktop with this stunning sci-fi city wallpaper. The digital artwork features a dystopian metropolis with towering skyscrapers and neon lights, perfect for fans of science fiction and cyberpunk. This high-quality wallpaper is available for instant download and can be easily resized to fit your screen. It's a great way to give your computer a stylish upgrade that's sure to turn heads. Get yours today and take your desktop to the next level!",
    resolution: "4096x2304",
    orientation: "landscape"
  },
  {
    name: "Floating Sky Castle Digital Wallpaper",
    cost: "2.00",
    img: "./productImages/SkyCastle.png",
    heading: "Enchant Your Desktop Wallpaper With an Awesome Wallpaper",
    text: "This Floating Sky Castle Digital PC Wallpaper features a majestic, ethereal scene of a castle suspended in the sky. The dreamy image is filled with vibrant colors and intricate details that draw you into the fantasy world it creates. A beautiful blue sky provides an idyllic backdrop for this magical landscape, while soft clouds float by in the distance to complete this breathtaking view. With its stunning visuals and captivating atmosphere, this digital wallpaper will add an enchanting touch to any computer screen!",
    resolution: "4096x2304",
    orientation: "landscape"
  },
  {
    name: "Anime Land Digital Wallpaper",
    cost: "2.00",
    img: "./productImages/AnimeBoy.png",
    heading: "Enrich Your PC With a Vibrant Anime Wallpaper",
    text: "This Anime Land Digital PC Wallpaper is a vibrant and colorful piece of digital artwork that features an imaginative landscape filled with lush foliage, bright skies, and whimsical characters. The vivid colors bring the scene to life while the detailed line work creates a sense of depth in the environment. This wallpaper is perfect for any fan of anime or fantasy art; it will add energy and personality to your desktop!",
    resolution: "4096x2304",
    orientation: "landscape"
  },
  
 
]
// Custom component to wrap the PayPalButtons and handle currency changes

function ProductDetails({productName, productImage, productCost, productHeading, productText, productResolution, productOrientation}) {
  return (
    <Container maxW={"7xl"}>
    
      
          <Image
            rounded={"md"}
            alt={"product image"}
            src={productImage}
            _hover={{
              transition:`all .3s ease`,
              transform: `scale(0.96)`
            }}
            align={"center"}
            w={"100%"}
            h={{ base: "5vh", sm: "15vh", lg: "60vh" }}
          />
      
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {productName}
            </Heading>
            <Text
              color={"green.300"}
              fontWeight={300}
              fontSize={"2xl"}
            >
              ${productCost} USD
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
              {productHeading}
              </Text>
              <Text fontSize={"lg"}>
                {productText}
              </Text>
            </VStack>
          
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Wallpaper Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Resolution:
                  </Text>{" "}
                  {productResolution} px
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Orientation:
                  </Text>{" "}
                  {productOrientation}
                </ListItem>


        
              </List>
            </Box>
          </Stack>
          
     

         <br/>
        </Stack>
  
    </Container>
  )
}
  const SocialButton = ({ children, label, href }) => {
    return (
      <chakra.button
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        rounded={"full"}
        w={8}
        h={8}
        cursor={"pointer"}
        as={"a"}
        href={href}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200")
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    )
  }

   function SmallWithSocial() {
    return (
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2023 DevoArts. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Discord"} target="none" href={"https://discord.gg/Q3EYFVmhwe"}>
              <FaDiscord />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    )
  }
 function ProductSimple({img, cost, name, heading, text, resolution, orientation}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
  
       <Center  py={6}>
          <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Product Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <ProductDetails productImage={img} productCost={cost} productText={text} productHeading={heading} productName={name} productOrientation={orientation} productResolution={resolution} />
          </ModalBody>

      
        </ModalContent>
      </Modal>
      <Box
    
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
     
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
    
        
        >
      
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={img}
            onClick = {onOpen}
            _hover={{
              cursor:"pointer"
            }}
          />
        </Box>
        <Stack pt={10} align={"center"}>
         
          <Heading textAlign={'center'} fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {name}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              ${cost}
            </Text>
       
          </Stack>
        </Stack>
      </Box>
    </Center>

       
   

  )
}


const testimonials = [
  {
    name: "Brandon P.",
    role: "Chief Marketing Officer",
    content:
      "It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
  },
  {
    name: "Krysta B.",
    role: "Entrepreneur",
    content:
      "I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",
    avatar:
      "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
  },
  {
    name: "Darcy L.",
    role: "Movie star",
    content:
      "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
  },
  {
    name: "Daniel T.",
    role: "Musician",
    content:
      "I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!",
    avatar:
      "https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
  }
]

function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen: isModalOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
       <Modal isOpen={isModalOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Purchase Our Art</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          Unfortunately, we only accept paypal payment currently, however in the near future we will be opening more payment options. If you would like to purchase a wallpaper, please join our discord server and request a wallpaper there, or send us an email at surgeofroblox@gmail.com We read our discord more so we would recommand purchasing through there.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            DevoArts
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"https://discord.gg/Q3EYFVmhwe"}
          >
            Contact / Support
          </Button>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            onClick={onOpen}
            bg={"green.400"}
            href={"#"}
            _hover={{
              bg: "green.300"
            }}
          >
            Buy Now
          </Button>
          <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>s
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200")
  const linkHoverColor = useColorModeValue("gray.800", "white")
  const popoverContentBgColor = useColorModeValue("white", "gray.800")

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none"
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

const NAV_ITEMS = [
  {
    label: "Reviews",
    children: [
      {
        label: "Our Credentials",
        subLabel: "Read the stories of customers who came to us",
        href: "#reviews"
      },
      
    ]
  },
  {
    label: "Artworks",
    children: [
      {
        label: "Browse",
        subLabel: "Browse our wide collection of artworks",
        href: "#art"
      },
      
    ]
  },
 
]



const backgrounds = [
  `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`
]

function TestimonialCard(props) {
  const { name, role, content, avatar, index } = props
  return (
    <Flex
      boxShadow={"lg"}
      maxW={"640px"}
      direction={{ base: "column-reverse", md: "row" }}
      width={"full"}
      rounded={"xl"}
      p={10}
      justifyContent={"space-between"}
      position={"relative"}
      bg={useColorModeValue("white", "gray.800")}
      _after={{
        content: '""',
        position: "absolute",
        height: "21px",
        width: "29px",
        left: "35px",
        top: "-10px",
        backgroundSize: "cover",
        backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`
      }}
      _before={{
        content: '""',
        position: "absolute",
        zIndex: "-1",
        height: "full",
        maxW: "640px",
        width: "full",
        filter: "blur(40px)",
        transform: "scale(0.98)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        top: 0,
        left: 0,
        backgroundImage: backgrounds[index % 4]
      }}
    >
      <Flex
        direction={"column"}
        textAlign={"left"}
        justifyContent={"space-between"}
      >
        <chakra.p
          fontFamily={"heading"}
          fontWeight={"medium"}
          fontSize={"15px"}
          pb={4}
        >
          {content}
        </chakra.p>
        <chakra.p fontFamily={"heading"} fontWeight={"bold"} fontSize={14}>
          {name}
          <chakra.span
            fontFamily={"heading"}
            fontWeight={"medium"}
            color={"gray.500"}
          >
            {" "}
            - {role}
          </chakra.span>
        </chakra.p>
      </Flex>
      <Avatar
        src={avatar}
        height={"80px"}
        width={"80px"}
        alignSelf={"center"}
        m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
      />
    </Flex>
  )
}

function GridBlurredBackdrop() {
  return (
    <Flex
      textAlign={"center"}
      pt={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
      overflow={"hidden"}
    >
      <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
        <chakra.h3
          fontFamily={"heading"}
          fontWeight={"bold"}
          fontSize={20}
          id="reviews"
          textTransform={"uppercase"}
          color={"purple.400"}
        >
          Our Reviews
        </chakra.h3>
        <chakra.h1
          py={5}
          fontSize={40}
          fontFamily={"heading"}
          fontWeight={"bold"}
          color={useColorModeValue("gray.700", "gray.50")}
        >
          Our business has been trusted by many users
        </chakra.h1>
      
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={"20"}
        mt={16}
        mb={16}
        mx={"auto"}
      >
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
  
    </Flex>
  )
}

 function CallToActionWithAnnotation() {
  return (
    <>
      <Heading>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Heading>

      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={60}
            _hover={{
              transition: "all .2s ease",
              textColor: "green.400"
            }}
            fontSize={{ base: "4xl", sm: "8xl", md: "12xl" }}
            lineHeight={"110%"}
          >
            Devo
            <Text  _hover={{
              transition: "all .2s ease",
              textColor: "white"
            }} as={"span"} color={"green.400"}>
              Arts
            </Text>
            
            <IconButton bg="transparent" marginLeft={"1vw"} size="xl">
              <Link target="none" href="https://discord.gg/Q3EYFVmhwe">
              <SiDiscord/>
              </Link>
           
            </IconButton>
          </Heading>
          <Text fontSize={{ base: "lg", sm: "2xl", md: "3xl" }} color={"gray.500"}>
          DevoArts creates and sells stunning digital wallpapers that can transform any device screen into a work of art. Our designs are created by experienced artists and available for instant download. With a wide variety of abstract and landscape patterns to choose from, DevoArts is the perfect choice for anyone looking to elevate their digital experience.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Flex>
              
            </Flex>
            <Link
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"xl"}
              href={"#art"}
              p={2}
              px={10}
              _hover={{
                bg: "green.500"
              }}
            >
              Browse Artworks
            </Link>
     
       
          
           
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

const Arrow = createIcon({
  displayName: "Arrow",
  viewBox: "0 0 72 24",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  )
})


export default function App() {
  return (
  
  <ChakraProvider>
    
    <WithSubnavigation/>
    <CallToActionWithAnnotation/>
    <GridBlurredBackdrop/>
    <Container maxW={"3xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        
         <Heading id="art" fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}>
      Our Artworks
    </Heading>
      </Stack>
    </Container>

 <Box p="10">
 <Wrap spacing="30px" marginTop="5" justifyContent="center">
    {products.map((cardInfo, index) => (
      <WrapItem  width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
        <ProductSimple  {...cardInfo} index={index} />
      </WrapItem>
       
      ))}
    </Wrap>
 </Box>

   
 


   <SmallWithSocial/>
  </ChakraProvider>
  
  
  )
}